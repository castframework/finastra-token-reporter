import { Field, InterfaceType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InterfaceType()
export abstract class BaseMeta {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
}
