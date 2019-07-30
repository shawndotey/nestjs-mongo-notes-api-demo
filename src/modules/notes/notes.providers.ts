import { NoteSchema } from './schema/note.schema';
import { Connection } from 'mongoose';
export const notesProviders = [
  {
    provide: 'NotesModelConnection',
    useFactory: (connection: Connection) =>
      connection.model('Note', NoteSchema),
    inject: ['DbConnectionToken']
  }
];
