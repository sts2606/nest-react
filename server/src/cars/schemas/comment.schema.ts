import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Car } from 'src/cars/schemas/car.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop()
  userFullName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Car' })
  car: Car;

  @Prop()
  commentText: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
