import { Controller, Get, Query } from '@nestjs/common';
import { NOTIFICATION_TYPE } from './events.model';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('')
  getEvents(@Query('notification_type') notificationType: NOTIFICATION_TYPE): Promise<any> {
    return this.eventsService.findAll({
      'contractNotification.notificationName': notificationType,
    });
  }
}
