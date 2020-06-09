import { register, listen, Credentials, Client } from 'push-receiver';
import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';

const senderId = '976529667804';

export default class NotificationListener {
  credentials?: Credentials;
  client?: Client;
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

    return true;
  }

  async listen(): Promise<Notification> {
    return new Promise(async (resolve, reject) => {
      if (!this.credentials) {
        return reject('Push notification credentials not available. This should never happen.');
      }

      this.client = await listen(this.credentials, ({ notification }) => {
        if (!notification.data.body) return;

        if (notification.data.channelId === 'pairing') {
          this.destroy();
          return resolve(JSON.parse(notification.data.body) as Notification);
        }
      });
    });
  }

  destroy() {
    if (this.client) {
      this.client.destroy();
    }
  }
}

// TODO: Add support for more types of pair notifications
interface Notification {
  type: string;
  name: string;
  id: string;
  ip: string;
  port: string;
  desc: string;
  url: string;
  img: string;
  playerId: string;
  playerToken: string;
}
