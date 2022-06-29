import { Controller, Get, Param } from '@nestjs/common';
import { LeiService } from './lei.service';

@Controller('lei')
export class LeiController {
  constructor(private readonly leiService: LeiService) {}

  @Get(':id')
  leiLookup(@Param('id') id: string): Promise<any> {
    return this.leiService.lookup(id);
  }
}
