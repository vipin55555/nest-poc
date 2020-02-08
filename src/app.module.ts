import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemModule } from './item/item.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import config from './config/config';

@Module({
  imports: [
    MongooseModule.forRoot(config.db.connectionString),
    ItemModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
