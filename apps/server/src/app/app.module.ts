import { LoggerModule } from '@finastra/nestjs-logger';
import { ProxyModule } from '@finastra/nestjs-proxy';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseConfigService } from '../configs/mongoose.config';
import { ProxyConfigService } from '../configs/proxy-config.service';
import { appFolder, ServeStaticConfigService } from '../configs/serve-static-config.service';
import { EntitiesModule } from './entities/entities.module';
import { HealthModule } from './health/health.module';
import { LeiModule } from './leil/lei.module';

@Module({
  imports: [
    /* OidcModule.forRootAsync({
      imports: [ConfigModule],
      useClass: OidcConfigService,
    }), */
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticConfigService,
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/static',
      rootPath: appFolder,
    }),
    ProxyModule.forRootAsync({
      useClass: ProxyConfigService,
      imports: [ConfigModule],
    }),
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
    HealthModule,
    LoggerModule,
    EntitiesModule,
    LeiModule,
  ],
})
export class AppModule {}
