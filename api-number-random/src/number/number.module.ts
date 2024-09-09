import { MiddlewareConsumer, Module } from '@nestjs/common';
import { NumberController } from './number.controller';
import { NumberService } from './number.service';
import { NumberMiddleware } from './number.middleware';

@Module({
  controllers: [NumberController],
  providers: [NumberService]
})
export class NumberModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(NumberMiddleware)
      .forRoutes('/number/post-random')
  }
}
