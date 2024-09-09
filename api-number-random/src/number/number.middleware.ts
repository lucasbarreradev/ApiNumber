import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class NumberMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const timeStamp = new Date().toISOString();
    console.log(`El time stamp de la solicitud es de: ${timeStamp}`)
    next();
  }
}
