import { IsNotEmpty, IsString } from 'class-validator';
import { IsEthWalletAddress } from '../decorators/class-validator/isEthWallet.decorator';

export class ConnectWalletDto {
  @IsString()
  @IsNotEmpty()
  signature: string;

  @IsString()
  @IsEthWalletAddress()
  @IsNotEmpty()
  walletAddress: string;
}
