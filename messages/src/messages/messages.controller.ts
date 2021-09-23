import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(): string {
    return 'Hello Dog!';
  }
  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
