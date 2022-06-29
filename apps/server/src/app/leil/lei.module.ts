import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LeiController } from './lei.controller';
import { LeiService } from './lei.service';

@Module({
  imports: [HttpModule],
  controllers: [LeiController],
  providers: [LeiService],
})
export class LeiModule {}
