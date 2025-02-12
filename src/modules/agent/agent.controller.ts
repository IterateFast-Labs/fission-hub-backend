import { Controller, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AgentService } from './agent.service';
import { GetStatusDto } from './dtos/get-status.dto';

@Controller('agent')
@ApiTags('Agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  // Retrieves the status of an agent
  @Get('')
  public async getStatus(@Query() query: GetStatusDto) {}
}

