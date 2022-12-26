import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

//Criando um repositório fake
const notificationsRepository = {
  async create(notification: Notification){
    notifications.push(notification);
  }
}

//Criando um array de repositórios fake
const notifications: Notification[] = [];

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository)

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    })

    console.log(notifications);

    // expect(notification).toBeTruthy();
    expect(notifications).toHaveLength(1);
  }) 
})