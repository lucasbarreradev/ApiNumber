import { Controller, Post } from '@nestjs/common';
import { NumberService } from './number.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/number')
export class NumberController {
    constructor(private numberService: NumberService) {};
    
    @ApiTags('number')
    @ApiOperation({ summary: 'Muestra un número random del 1 al 100' })
    @Post('/post-random')
    postNumber(){
        const value = this.numberService.postNumber(1, 100);
        return {value};
    }
}
