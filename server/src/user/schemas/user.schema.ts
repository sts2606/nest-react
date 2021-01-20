// import { UserDocument, UserShema } from './user.schema';
// import { genderEnum } from './../enums/gender.enum';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type UserDocument = User & Document;

// @Schema()
// export class User {
//   @Prop({ required: true })
//   firstName: string;

//   @Prop({ required: true })
//   lastName: string;

//   @Prop({ required: true, unique: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ enum: Object.values(genderEnum) })
//   gender: string;

//   @Prop()
//   avatar: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);
import * as mongoose from 'mongoose';
import { genderEnum } from '../enums/gender.enum';

export const UserShema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true, enum: Object.values(genderEnum) },
  avatar: { type: String, default: null },
  avatartId: { type: String, default: null },
  password: { type: String, required: true },
});

UserShema.index({ email: 1 }, { unique: true });
