import { IsEnum } from 'class-validator';
import { NOTIFICATION_TYPE } from '../events.model';

export class GetEventsDto {
  @IsEnum(() => NOTIFICATION_TYPE)
  'contractNotification.notificationName'?: NOTIFICATION_TYPE;
}
