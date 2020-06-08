import { register, listen, Credentials } from 'push-receiver';
import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';

const senderId = '976529667804';

export default class NotificationListener {
  credentials?: Credentials;
  expoToken = '';
  authToken = '';

  constructor(authToken: string) {
    this.authToken = authToken;
  }

  async register(): Promise<boolean> {
    try {
      this.credentials = await register(senderId);
    } catch (error) {
      console.log(`[notificationService] registration failed: ${error}`);
      return false;
    }
    return true;
  }

  async pushToExpo(): Promise<void> {
    const getExpoPushToken = {
      deviceId: uuidv4(),
      experienceId: '@facepunch/RustCompanion',
      appId: 'com.facepunch.rust.companion',
      deviceToken: this.credentials!.fcm.token,
      type: 'fcm',
      development: false,
    };

    const expo = await fetch('https://exp.host/--/api/v2/push/getExpoPushToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getExpoPushToken),
    }).then((res) => res.json());
    this.expoToken = expo.data.expoPushToken;
  }

  async pushToFacepunch(): Promise<void> {
    const pushRegister = {
      AuthToken: this.authToken,
      DeviceId: 'oxygen',
      PushKind: 0,
      PushToken: this.expoToken,
    };

    await fetch('https://companion-rust.facepunch.com/api/push/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pushRegister),
    }).then((res) => res.json());
  }

  async listen(): Promise<unknown> {
    if (!this.credentials) return;

    listen(this.credentials, ({ notification }) => {
      if (!notification.data.body) return;

      return JSON.parse(notification.data.body);
    });
  }
}
