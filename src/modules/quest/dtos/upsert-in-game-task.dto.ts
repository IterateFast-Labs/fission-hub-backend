import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { InGameTask } from '../type';

export class UpsertInGameTaskDto {
  // Type of in-game task being updated
  inGameTask: InGameTask;
  // Points awarded for the task
  point: number;
}
