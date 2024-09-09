"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberModule = void 0;
const common_1 = require("@nestjs/common");
const number_controller_1 = require("./number.controller");
const number_service_1 = require("./number.service");
const number_middleware_1 = require("./number.middleware");
let NumberModule = class NumberModule {
    configure(consumer) {
        consumer
            .apply(number_middleware_1.NumberMiddleware)
            .forRoutes('/number/post-random');
    }
};
exports.NumberModule = NumberModule;
exports.NumberModule = NumberModule = __decorate([
    (0, common_1.Module)({
        controllers: [number_controller_1.NumberController],
        providers: [number_service_1.NumberService]
    })
], NumberModule);
//# sourceMappingURL=number.module.js.map