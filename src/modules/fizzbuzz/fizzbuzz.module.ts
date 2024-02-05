import { Module } from '@nestjs/common';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz.service';
import { FizzbuzzServiceTag } from '@domain';

@Module({
  controllers: [FizzbuzzController],
  providers: [{ provide: FizzbuzzServiceTag, useClass: FizzbuzzService }],
  exports: [FizzbuzzServiceTag],
})
export class FizzbuzzModule {}
