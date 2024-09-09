import { Module } from '@nestjs/common';
import { NumberModule } from './number/number.module';

@Module({
  imports: [NumberModule],
})
export class AppModule {}
