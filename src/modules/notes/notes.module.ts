import { notesProviders } from './notes.providers';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  modules: [DatabaseModule],
  controllers: [NotesController],
  components: [NotesService, ...notesProviders]
})
export class NotesModule {}
