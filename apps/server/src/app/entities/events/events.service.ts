import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetEventsDto } from './dto/get-events.dto';
import { Event, EventDocument } from './events.model';

@Injectable()
export class EventsService {
  private logger = new Logger(EventsService.name);

  constructor(
    @InjectModel(Event.name)
    private eventsModel: Model<EventDocument>
  ) {}

  async findAll(filters: GetEventsDto): Promise<Event[]> {
    return this.eventsModel.find({ ...filters }).exec();
  }
}
