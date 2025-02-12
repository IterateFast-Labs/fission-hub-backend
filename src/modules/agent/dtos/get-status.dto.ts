import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StatusType } from '../type';

export class GetStatusDto {
  // The ID of the agent
  agentId: string;
  // The type of status being requested
  type?: StatusType;
}