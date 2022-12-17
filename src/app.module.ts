import { Module } from '@nestjs/common';
import { MailService } from 'mail/mail.service';
import { SMTPMailService } from 'mail/smtp-mail.services';
import { AppController } from './app.controller';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
      provide: MailService,
      useClass: SMTPMailService,
  }],
})
export class AppModule {}
