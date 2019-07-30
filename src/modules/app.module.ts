import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';


@Module({
    modules: [NotesModule],
    imports: [NotesModule],
})
export class ApplicationModule {}