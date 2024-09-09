"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberController = void 0;
const common_1 = require("@nestjs/common");
const number_service_1 = require("./number.service");
const swagger_1 = require("@nestjs/swagger");
let NumberController = class NumberController {
    constructor(numberService) {
        this.numberService = numberService;
    }
    ;
    postNumber() {
        const value = this.numberService.postNumber(1, 100);
        return { value };
    }
};
exports.NumberController = NumberController;
__decorate([
    (0, swagger_1.ApiTags)('number'),
    (0, swagger_1.ApiOperation)({ summary: 'Muestra un número random del 1 al 100' }),
    (0, common_1.Post)('/post-random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NumberController.prototype, "postNumber", null);
exports.NumberController = NumberController = __decorate([
    (0, common_1.Controller)('/number'),
    __metadata("design:paramtypes", [number_service_1.NumberService])
], NumberController);
//# sourceMappingURL=number.controller.js.map