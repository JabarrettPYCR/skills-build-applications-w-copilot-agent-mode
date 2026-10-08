import { Schema, model } from 'mongoose';
import { schemaOptions } from './schemaOptions.js';

const leaderboardEntrySchema = new Schema(
  {
    _id: { type: String, required: true },
    rank: { type: Number, required: true },
    userId: { type: String, required: true, ref: 'User' },
    displayName: { type: String, required: true },
    points: { type: Number, required: true },
    weeklyCalories: { type: Number, required: true },
  },
  { ...schemaOptions, collection: 'leaderboard' },
);

export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);