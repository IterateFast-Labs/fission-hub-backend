import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  page: number = 1;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  size: number = 10;
}
