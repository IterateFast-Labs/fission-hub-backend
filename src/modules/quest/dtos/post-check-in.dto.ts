import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

// DTO for user check-in requests
export class PostCheckInDto {
  // The day of check-in
  day: number;
  // ID of the check-in event
  checkInEventId: string;
}