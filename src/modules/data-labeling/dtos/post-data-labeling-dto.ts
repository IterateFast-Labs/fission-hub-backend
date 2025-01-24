import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { InputOptionType } from '../type';

// DTO for handling data labeling requests
export class PostDataLabelingDto {
  // Dataset ID
  dataSetId: string;

  // Selected input option
  inputOption: InputOptionType;

  // Campaign ID
  campaignId: string;
}
