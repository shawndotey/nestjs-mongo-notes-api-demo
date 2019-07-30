import { Controller, Post, Body, Get, Param, Put, Delete, Query, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './interface/note.interface';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('api/notes')
export class NotesController {
 constructor(private readonly notesService: NotesService) { }

 @Post()
 async create(@Body() createNoteDto: CreateNoteDto) {
  return this.notesService.create(createNoteDto);
 }

 @Get()
 async findAll(@Query('query') query): Promise<Note[]> {
  if(query){
   return this.notesService.findByNoteBody(query);
  }
  return this.notesService.findAll();
 }

 @Get(':id')
 async findOne(@Param('id') id, @Res() repsonse): Promise<Note> {
  const matchingNote = await this.notesService.findById(id);
  if(!matchingNote){
   repsonse.status(HttpStatus.NOT_FOUND);
   return repsonse.send();
  }
  return repsonse.json(matchingNote);
 }
 

 @Put(':id')
 async updateByParam(@Param('id') id, @Body() updateNoteDto: UpdateNoteDto, @Res() repsonse): Promise<Note> {
  updateNoteDto._id = id;
  return this.updateNote(updateNoteDto, repsonse);
 }

 @Put()
 async update(@Body() updateNoteDto: UpdateNoteDto, @Res() repsonse) {
  return this.updateNote(updateNoteDto, repsonse)
 }

 @Delete(':id')
 @HttpCode(202)
 deleteById(@Param('id') id): Promise<string> {
  return this.notesService.removeById(id);
 }

 private async updateNote(updateNoteDto: UpdateNoteDto, repsonse){

  const checkIfExists = await this.notesService.findById(updateNoteDto._id);
  if(!checkIfExists){
   repsonse.status(HttpStatus.NOT_FOUND);
   return repsonse.send();
  } else {
   repsonse.status(HttpStatus.ACCEPTED);
  }
  return repsonse.json(await this.notesService.updateNote(updateNoteDto));
 }
}
