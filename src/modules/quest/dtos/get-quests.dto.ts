import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { PaginationDto } from 'src/commons/dtos/pagination.dto';

// DTO for filtering quest retrieval requests
export class GetQuestsFilterDto {
  // Optional filter for quest title
  title: string;
}


// DTO for paginated quest retrieval requests
export class GetQuestsDto extends PaginationDto {
  // Filter criteria for fetching quests
  filter: GetQuestsFilterDto;
}