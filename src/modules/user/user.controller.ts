import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { User } from 'src/commons/decorators/request/user.decorator';
import { AuthGuard } from 'src/commons/guards/auth.guard';
import { AuthUser } from 'src/types';
import { PatchReferralDto } from './dtos/patch-referral.dto';
import { PatchUserNicknameDto } from './dtos/patch-user-nickname.dto';
import { UserService } from './user.service';
import { PaginationDto } from 'src/commons/dtos/pagination.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
@UseGuards(AuthGuard)
@ApiBearerAuth('accessToken')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Retrieves the authenticated user's information
  @Get('/myInfo')
  async getMyInfo(@User() user: AuthUser) {}

  // Retrieves the referral information of the authenticated user
  @Get('/referral')
  async getReferral(@User() user: AuthUser, @Query() query: PaginationDto) {}

  // Retrieves the user's point balance
  @Get('/myPoint')
  async getMyPoint(@User() user: AuthUser) {}

  // Retrieves the user's inventory
  @Get('inventory')
  async getInventory(@User() user: AuthUser) {}

  // Updates the user's referral code
  @Patch('/patchReferral')
  @Throttle(1, 3)
  async patchReferral(
    @User() user: AuthUser,
    @Body() patchReferralDto: PatchReferralDto,
  ) {}

  // Updates the user's nickname
  @Patch('/nickname')
  public async patchNickname(
    @User() user: AuthUser,
    @Body() patchUserNicknameDto: PatchUserNicknameDto,
  ) {}
}
