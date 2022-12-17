import { Module } from '@nestjs/common';
import { HttpModule } from 'mail/http.module';
import { MailService } from 'mail/mail.service';
import { PostMarkMailService } from 'mail/postmark-mail.service';
import { SMTPMailService } from 'mail/smtp-mail.services';
import { AppController } from './app.controller';


@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [{
      provide: MailService,
      useClass: PostMarkMailService,
  }],
})
export class AppModule {}
