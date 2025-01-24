import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

// DTO for handling user nickname updates
export class PatchUserNicknameDto {
  // New nickname string
  nickname: string;
}