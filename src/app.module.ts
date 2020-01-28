import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemModule } from './item/item.module';
import config from './config/config';

@Module({
  imports: [
    ItemModule,
    MongooseModule.forRoot(config.db.connectionString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
