import { Comment, CommentDocument } from './schemas/comment.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/createCommentDto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private comentModel: Model<CommentDocument>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<CommentDocument> {
    const createdComment = new this.comentModel(createCommentDto);
    return await createdComment.save();
  }

  async findByCar(carId) {
    return await this.comentModel.find({ car: carId }).exec();
  }
}
