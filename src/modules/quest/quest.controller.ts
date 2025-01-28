import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/commons/decorators/request/user.decorator';
import { AuthGuard } from 'src/commons/guards/auth.guard';
import { AuthUser } from 'src/types';
import { GetQuestsDto } from './dtos/get-quests.dto';
import { PostCheckInDto } from './dtos/post-check-in.dto';
import { UpsertInGameTaskDto } from './dtos/upsert-in-game-task.dto';
import { QuestService } from './quest.service';

@Controller('quests')
@ApiTags('Quests')
@ApiBearerAuth('accessToken')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  // Retrieves a paginated list of quests
  @Get('')
  public async getQuests(@Query() query: GetQuestsDto) {}

  // Retrieves details of a specific quest
  @Get('')
  public async getQuest(@Param('questId') questId: string) {}

  // Retrieves the quest status for a user
  @Get('')
  @UseGuards(AuthGuard)
  public async getQuestUserStatus(
    @User() user: AuthUser,
    @Param('questId') questId: string,
  ) {}

  // Marks a task within a quest as completed
  @Post('')
  @UseGuards(AuthGuard)
  public async finishQuestTask(
    @User() user: AuthUser,
    @Param('questId') questId: string,
    @Param('taskId') taskId: string,
  ) {}
}
