"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestController = void 0;
var common_1 = require("@nestjs/common");
var authorization_guard_1 = require("../../../../../../../../../../src/http/auth/authorization.guard");
var TestController = /** @class */ (function () {
    function TestController() {
    }
    TestController.prototype.helo = function () {
        return 'OK';
    };
    __decorate([
        (0, common_1.Get)(),
        (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard)
    ], TestController.prototype, "helo");
    TestController = __decorate([
        (0, common_1.Controller)('test')
    ], TestController);
    return TestController;
}());
exports.TestController = TestController;
