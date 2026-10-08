import { Schema, model } from 'mongoose';
import { schemaOptions } from './schemaOptions.js';

const teamSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    motto: { type: String, required: true },
    city: { type: String, required: true },
    memberCount: { type: Number, required: true },
  },
  { ...schemaOptions, collection: 'teams' },
);

export const Team = model('Team', teamSchema);