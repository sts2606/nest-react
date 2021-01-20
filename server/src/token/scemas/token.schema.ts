import * as mongoose from 'mongoose';

export const TokenShema = new mongoose.Schema({
  token: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  expierAt: { type: Date, required: true },
});

TokenShema.index({ token: 1, userId: 1 }, { unique: true });
