import {
  BadRequestException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '@providers/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Retrieves user information
  public async getUser(userId: string) {}

  // Retrieves user's referral information
  public async getUserReferral(userId: string, page: number, size: number) {}

  // Retrieves user's accumulated points
  public async getMyPoint(userId: string) {}

  // Retrieves user's inventory
  public async getInventory(userId: string) {}

  // Links a user with a referral code
  public async patchUserReference(userId: string, referralCode: string) {}

  // Updates the user's nickname
  public async patchNickname(userId: string, nickname: string) {}
}
