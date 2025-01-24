import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '@providers/database/database.service';
import { RedisService } from '@providers/redis/redis.service';
import { AgentType } from './types';

@Injectable()
export class DatasetService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly redisService: RedisService,
  ) {}

  // Retrieves the most recent campaign for an agent type
  public async getRecentCampaign(agentType: AgentType) {}

  // Fetches datasets associated with a campaign
  public async getCampaign(userId: string, campaignId: string) {}

  // Fetches datasets available for a user to label
  public async getPlayableDataset(userId: string) {}

  // Fetches a specific dataset by ID
  public async getDataset(userId: string, datasetId: string) {}
}