import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '@providers/database/database.service';
import { GetStatusDto } from './dtos/get-status.dto';
import { StatusType } from './type';

@Injectable()
export class AgentService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Retrieves the status of an agent based on query parameters
  public async getStatus(query: GetStatusDto) {}
}