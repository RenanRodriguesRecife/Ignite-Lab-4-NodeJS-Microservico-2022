import { Injectable } from '@nestjs/common/decorators';
import { MailService } from './mail.service';

@Injectable()
export class PostMarkMailService implements MailService{
  sendEmail(): string {
    return 'Postmark Mail';
  }
}
