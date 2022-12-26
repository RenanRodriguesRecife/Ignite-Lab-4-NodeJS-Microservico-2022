import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface SendNotificationRequest{
  recipientId: string;
  content: string;
  category: string;
}

// é bom retorno as coisas como objeto pois no momento que você for precisar 
// retornar mais coisa você só adicionar um novo objeto como forma de retorno
// você não precisa ficar mundado a internamente a classe sendnotification toda vez que for mudar a forma de retorno
interface SendNotificationResponse{
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    })

    //Persistir essa notificação no Banco
    //Criar um Repository Pattern - é um intermédio entre a aplicação e a camada de persistência
    //A classe que faz o intermédio entre a classe que faz a comuniação entre banco de dados e aplicação de repositório
    //Aplica o conceito de inversão de dempendencia - nesse caso facilitar a migração para outro banco de dados

    return{
      notification,
    }
  }
}