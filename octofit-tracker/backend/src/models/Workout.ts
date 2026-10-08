import { Schema, model } from 'mongoose';
import { schemaOptions } from './schemaOptions.js';

const workoutSchema = new Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    focus: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    recommendedFor: { type: [String], required: true },
  },
  { ...schemaOptions, collection: 'workouts' },
);

export const Workout = model('Workout', workoutSchema);