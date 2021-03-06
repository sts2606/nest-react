import { genderEnum } from './../enums/gender.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: Object.values(genderEnum) })
  gender: string;

  @Prop({ default: 'user.png' })
  awatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
