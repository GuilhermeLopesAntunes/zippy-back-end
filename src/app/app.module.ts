import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ChallengesModule } from 'src/challenges/challenges.module';
import { ClassesModule } from 'src/classes/classes.module';

@Module({
  imports: [UsersModule, ChallengesModule, ClassesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
