import { MailService } from './mail.service';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class SMTPMailService implements MailService{
  sendEmail(): string {
    return 'SMTP Mail';
  }
}

