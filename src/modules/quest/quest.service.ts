import {
  BadRequestException,
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma, quest, task, user } from '@prisma/db';
import { DatabaseService } from '@providers/database/database.service';
import { RedisService } from '@providers/redis/redis.service';
import dayjs from 'dayjs';
import { taskApiCall } from './utils';

@Injectable()
export class QuestService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly redisService: RedisService,
  ) {}

  // Retrieves a paginated list of quests based on filters
  public async getQuests(page: number, size: number, filter: object) {}

  // Retrieves details of a specific quest
  public async getQuest(questId: string) {}

  // Retrieves quest completion status for a user
  public async getQuestUserStatus(questId: string, userId: string) {}

  // Marks a quest task as finished
  public async finishQuestTask(
    userId: string,
    questId: string,
    taskId: string,
  ) {}
}
