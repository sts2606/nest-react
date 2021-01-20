import * as mongoose from 'mongoose';

export class CreateTokenDto {
  token: string;
  userId: mongoose.Types.ObjectId;
  expireAt: string;
}
