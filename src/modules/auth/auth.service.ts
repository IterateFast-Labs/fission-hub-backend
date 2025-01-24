import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from '@prisma/db';
import { DatabaseService } from '@providers/database/database.service';
import { RedisService } from '@providers/redis/redis.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly redisService: RedisService,
    private readonly jwtService: JwtService,
  ) {}

  // Handles login using Telegram credentials
  public async loginWithTelegram(
    telegramId: string,
    telegramName: string,
    telegramHandle: string,
    referralCode: string,
  ) {}

  // Creates a new user using Telegram credentials
  private async createNewTelegramUser(
    telegramId: string,
    telegramName: string,
    telegramHandle: string,
    referralCode: string,
  ) {}

  // Logs out the user by clearing authentication data
  public async logout(userId: string) {}

  // Creates a nonce for wallet authentication
  public async createNonce(walletAddress: string) {}

  // Verifies the signature of a wallet address
  public async verifySignature(
    walletAddress: `0x${string}`,
    signature: `0x${string}`,
  ): Promise<void> {}

  // Generates an access token for authentication
  private async generateAccessToken(user: user): Promise<string> {}
}