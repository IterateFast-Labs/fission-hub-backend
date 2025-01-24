import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { DatabaseModule } from '@providers/database/database.module';
import { RedisModule } from '@providers/redis/redis.module';
/*
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
} from 'nestjs-i18n';
*/
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './commons/filters/http-exception.filter';
import { EasyTestModule } from './easy-test/easy-test.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { getRSAServerKeyPair } from './utils';
import { DatasetModule } from '@modules/dataset/dataset.module';
import { DataLabelingModule } from '@modules/data-labeling/data-labeling.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    ThrottlerModule.forRoot({}),
    /*
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [new HeaderResolver(['x-lang']), AcceptLanguageResolver],
    }),
    */

    DatabaseModule,
    RedisModule,

    EasyTestModule,

    AuthModule,
    UserModule,
    DatasetModule,
    DataLabelingModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {
  constructor() {
    const { encodedPublicKey, rawPublicKey, rawPrivateKey } =
      getRSAServerKeyPair();
    process.env.ENCODED_PUBLIC_KEY = encodedPublicKey;
    process.env.RAW_PUBLIC_KEY = rawPublicKey;
    process.env.RAW_PRIVATE_KEY = rawPrivateKey;
  }
}
