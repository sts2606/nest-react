import { ObjectId } from 'mongoose';
export class CreateCommentDto {
  readonly userId: ObjectId;
  readonly commentText: string;
  readonly car: ObjectId;
}
