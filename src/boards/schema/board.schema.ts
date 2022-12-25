import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoardDocument = Board & Document;
@Schema()
export class Board {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, ref: 'User' })
  author: string;

  @Prop({
    required: true,
    ref: 'Webtoon',
  })
  webtoon: string;

  @Prop({ required: true })
  service: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
