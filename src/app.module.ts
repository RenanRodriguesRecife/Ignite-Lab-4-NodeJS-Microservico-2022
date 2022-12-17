import { Module } from '@nestjs/common';
import { MailService } from 'mail/mail.service';
import { PostMarkMailService } from 'mail/postmark-mail.service';
import { SMTPMailService } from 'mail/smtp-mail.services';
import { AppController } from './app.controller';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
      provide: MailService,
      useClass: PostMarkMailService,
  }],
})
export class AppModule {}
