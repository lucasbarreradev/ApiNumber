import { NumberService } from './number.service';
export declare class NumberController {
    private numberService;
    constructor(numberService: NumberService);
    postNumber(): {
        value: number;
    };
}
