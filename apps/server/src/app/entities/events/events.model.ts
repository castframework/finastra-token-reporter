import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseMeta } from '../../common/interfaces/base-meta.model';

export enum NOTIFICATION_TYPE {
  TRANSFER = 'Transfer',
  PAYMENT_RECEIVED = 'PaymentReceived',
  PAYMENT_TRANSFERRED = 'PaymentTransferred',
}
export type SETTLEMENT_TRANSACTION_OPERATION_TYPE = 'no Data' | 'Subscription';

@Schema()
export class ContractNotification {
  @Prop({ required: true })
  notificationName: NOTIFICATION_TYPE;

  @Prop({ required: true })
  instrumentAddress: string;

  @Prop({ required: true })
  transactionHash: string;

  @Prop({ required: true })
  @Field(() => [LightSettlementTransactions])
  lightSettlementTransactions: LightSettlementTransactions[];

  @Prop({ required: true })
  settlementTransactionOperationType: string;
}

export const ContractNotificationSchema = SchemaFactory.createForClass(ContractNotification);

@ObjectType({ description: 'ingredient-ids' })
export class LightSettlementTransactions {
  @Prop()
  @Field()
  id: string;
}

@Schema({ collection: 'cast_events' })
@ObjectType({ description: 'events', implements: () => [BaseMeta] })
export class Event extends BaseMeta {
  @Prop({ type: ContractNotificationSchema })
  contractNotification: typeof ContractNotificationSchema;
}

export type EventDocument = Event & Document;

export const EventSchema = SchemaFactory.createForClass(Event);
