import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { closeSync } from 'node:fs';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany()
  }

  @Post()
  async create(@Body() body:any){
    const { recipientId, content, category } = body
    await this.prisma.notification.create({
      data:{
        id: randomUUID(),
        content,
        category,
        recipientId,
      }
    })
  }
}
