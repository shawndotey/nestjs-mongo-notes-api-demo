import { Document } from 'mongoose';

export interface Note extends Document {
  readonly body: string;
}
