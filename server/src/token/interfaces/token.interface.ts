import { Document } from 'mongoose';

export interface IToken extends Document {
  readonly token: string;
  readonly userId: string;
  readonly expireAt: string;
}
