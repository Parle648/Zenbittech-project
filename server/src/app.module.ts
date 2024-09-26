import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DealsModule } from './deals/deals.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DealsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService, UsersService],
})
export class AppModule {}
