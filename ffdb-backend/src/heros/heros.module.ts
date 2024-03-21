import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';
import { herosProvider } from './heros.provider';

@Module({
  providers: [HerosService, ...herosProvider],
  controllers: [HerosController]
})
export class HerosModule {}
