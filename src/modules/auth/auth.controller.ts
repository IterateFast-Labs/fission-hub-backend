import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/commons/decorators/request/user.decorator';
import { AuthGuard } from 'src/commons/guards/auth.guard';
import { AuthUser } from 'src/types';
import { AuthService } from './auth.service';
import { PatchLoginDto } from './dtos/patch-login.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Handles Telegram-based login
  @Patch('')
  async login(@Body() body: PatchLoginDto) {}

  // Handles user logout
  @Delete('')
  @UseGuards(AuthGuard)
  public async logout(@User() user: AuthUser) {}

  // Retrieves the server's public key
  @Get('')
  public async getServerPubkey() {}
}
