import type { SchemaOptions } from 'mongoose';

export const schemaOptions: SchemaOptions = {
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: (_document, returnedObject: Record<string, unknown>) => {
      returnedObject.id = returnedObject._id;
      delete returnedObject._id;
      return returnedObject;
    },
  },
};