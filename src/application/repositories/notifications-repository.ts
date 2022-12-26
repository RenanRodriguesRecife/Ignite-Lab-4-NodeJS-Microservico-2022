//conceitualmente seria melhor usar interface mas o Nest trabalha melhor com classe Abstrata

import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}