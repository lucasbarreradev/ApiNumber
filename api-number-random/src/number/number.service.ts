import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberService {
    
    postNumber(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + 1);
    }
}
