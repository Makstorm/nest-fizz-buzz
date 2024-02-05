import { Module } from '@nestjs/common';
import { FizzbuzzModule } from './modules/fizzbuzz/fizzbuzz.module';

@Module({
  imports: [FizzbuzzModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
