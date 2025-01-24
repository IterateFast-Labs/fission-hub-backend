import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/db';
import { DatabaseService } from '@providers/database/database.service';
import { RedisService } from '@providers/redis/redis.service';
import { PostDataLabelingDto } from './dtos/post-data-labeling-dto';
import { InputOptionType } from './type';

@Injectable()
export class DataLabelingService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly redisService: RedisService,
  ) {}

  // Processes user data labeling submission
  public async dataLabeling(
    userId: string,
    postDataLabelingDto: PostDataLabelingDto,
  ) {}
}