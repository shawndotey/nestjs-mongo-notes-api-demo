import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema(
  {
    body: { type: String, require: true, unique: false }
  },
  {
    collection: 'notes',
    read: 'nearest'
  }
);
