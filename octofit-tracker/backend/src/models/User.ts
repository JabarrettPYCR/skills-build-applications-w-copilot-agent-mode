import { Schema, model } from 'mongoose';
import { schemaOptions } from './schemaOptions.js';

const userSchema = new Schema(
  {
    _id: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    teamId: { type: String, required: true, ref: 'Team' },
    fitnessGoal: { type: String, required: true },
  },
  { ...schemaOptions, collection: 'users' },
);

export const User = model('User', userSchema);