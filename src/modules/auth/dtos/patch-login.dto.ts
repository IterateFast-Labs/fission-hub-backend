import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PatchLoginDto {
  // Telegram user ID
  telegramId: string;

  // Telegram display name
  telegramName: string;

  // Telegram handle (optional)
  telegramHandle: string;

  // Referral code (optional)
  referralCode: string;
}

