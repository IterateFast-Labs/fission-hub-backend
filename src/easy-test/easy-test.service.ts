import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from '@prisma/db';
import { DatabaseService } from '@providers/database/database.service';
import { RedisService } from '@providers/redis/redis.service';

@Injectable()
export class EasyTestService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly redisService: RedisService,
    private readonly jwtService: JwtService,
  ) {}

  // Handles user login by verifying the wallet address
  public async login(walletAddress: string) {}

  // Generates and stores an access token for authenticated users
  private async generateAccessToken(user: user): Promise<string> {}
}