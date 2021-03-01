import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CarDocument = Car & Document;
@Schema()
export class Car {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  year: number;

  @Prop()
  image: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}

export const CarSchema = SchemaFactory.createForClass(Car);
