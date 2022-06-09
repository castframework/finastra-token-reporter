import { Controller, Get, Query } from '@nestjs/common';
import { GetEventsDto } from './dto/get-events.dto';
import { NOTIFICATION_TYPE } from './events.model';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('')
  getEvents(@Query('notification_type') notificationType: NOTIFICATION_TYPE): Promise<any> {
    const options: GetEventsDto = {};
    if (notificationType) {
      options['contractNotification.notificationName'] = notificationType;
    }
    return this.eventsService.findAll(options);
  }
}
