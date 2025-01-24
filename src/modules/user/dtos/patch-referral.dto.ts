import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

// DTO for handling referral code updates
export class PatchReferralDto {
  // Referral code string
  referralCode: string;
}