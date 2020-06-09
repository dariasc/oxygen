/* 
    Credit to https://github.com/selfisekai from here https://github.com/MatthieuLemoine/push-receiver/pull/35
    Using this file until it's merged upstream.
*/

declare module 'push-receiver' {
  export function listen(
    credentials: Credentials,
    notificationCallback: (notification: NotificationEnvelope) => unknown,
  ): Promise<Client>;

  export function register(
    senderId: string,
    options?: {
      noFcmRegistration?: false | null;
    },
  ): Promise<Credentials & FcmData>;

  export interface Credentials {
    keys: Keys;
    gcm: GcmData;
    fcm: FcmData;
    persistentIds: PersistentId[];
  }

  export interface Keys {
    privateKey: string;
    publicKey: string;
    authSecret: string;
  }

  export interface GcmData {
    androidId: string;
    token: string;
    securityToken: string;
  }

  export interface FcmData {
    token: string;
    pushSet: string;
  }

  export type PersistentId = string;

  export interface NotificationEnvelope {
    notification: NotificationContent;
    persistentId: PersistentId;
  }

  export interface NotificationContent {
    data: {
      title?: string;
      body?: string;
      channelId?: string;
      icon?: string;
      sound?: string;
      tag?: string;
      color?: string;
    };
  }

  declare class Client {
    on(
      event: 'ON_NOTIFICATION_RECEIVED',
      listener: (notification: NotificationEnvelope) => void,
    ): this;
    connect(): Promise<void>;
    destroy(): void;
  }
}
