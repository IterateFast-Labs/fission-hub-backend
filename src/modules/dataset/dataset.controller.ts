import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/commons/decorators/request/user.decorator';
import { AuthGuard } from 'src/commons/guards/auth.guard';
import { AuthUser } from 'src/types';
import { DatasetService } from './dataset.service';
import { AgentType } from './types';

@Controller('dataset')
@ApiTags('Dataset')
@UseGuards(AuthGuard)
@ApiBearerAuth('accessToken')
export class DatasetController {
  constructor(private readonly datasetService: DatasetService) {}

  // Fetches the most recent campaign for the given agent type
  @Get('')
  public async getRecentCampaign(@Param('agentType') agentType: AgentType) {}

  // Fetches campaign details for a user
  @Get('')
  public async getCampaign(
    @User() user: AuthUser,
    @Param('campaignId') campaignId: string,
  ) {}

  // Retrieves datasets available for user participation
  @Get('')
  public async getPlayableDataset(@User() user: AuthUser) {}

  // Fetches details of a specific dataset
  @Get('')
  public async getDataset(
    @User() user: AuthUser,
    @Param('datasetId') datasetId: string,
  ) {}
}