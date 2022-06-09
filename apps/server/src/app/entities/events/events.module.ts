import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsController } from './events.controller';
import { EventSchema } from './events.model';
import { EventsService } from './events.service';
@Module({
  controllers: [EventsController],
  imports: [MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
  providers: [EventsService],
})
export class EventModule {}
