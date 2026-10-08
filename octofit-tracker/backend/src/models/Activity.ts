import { Schema, model } from 'mongoose';
import { schemaOptions } from './schemaOptions.js';

const activitySchema = new Schema(
  {
    _id: { type: String, required: true },
    userId: { type: String, required: true, ref: 'User' },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    distanceMiles: { type: Number, required: true },
    completedAt: { type: Date, required: true },
  },
  { ...schemaOptions, collection: 'activities' },
);

export const Activity = model('Activity', activitySchema);