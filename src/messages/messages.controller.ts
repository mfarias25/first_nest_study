import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './Message';

@Controller('messages')
export default class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(+params.id);
  }

  @Post()
  create(@Body() body: Message) {
    return this.messagesService.create(body);
  }

  @Put(':id')
  update(@Param() params, @Body() message: Message) {
    return this.messagesService.update(+params.id, message);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(+params.id);
  }
}
