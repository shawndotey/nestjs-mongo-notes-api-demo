import { Model } from 'mongoose';
import { Component, Inject, Logger } from '@nestjs/common';
import { Note } from './interface/note.interface';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Component()
export class NotesService {
  constructor(
    @Inject('NotesModelConnection') private readonly noteModel: Model<Note>
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }

  async findAll(): Promise<Note[]> {
    return await this.noteModel.find().exec();
  }

  async findByNoteBody(noteBody: string): Promise<Note[]> {
    return await this.noteModel.find({body: new RegExp(noteBody, 'i')}).exec();
  }

  async findById(id:string): Promise<Note> {
    try{
      return await this.noteModel.findOne({_id: id}).exec();
    }catch(e){
      return null;
    }
  }

  async updateNote(updateNoteDto: UpdateNoteDto): Promise<Note> {
    await this.noteModel.findOneAndUpdate({_id: updateNoteDto._id}, updateNoteDto).exec();
    return await this.noteModel.findOne({_id: updateNoteDto._id}).exec();
  }

  async removeById(id:string): Promise<string> {
    await this.noteModel.remove({_id: id}).exec();
    return id;
  }
}
