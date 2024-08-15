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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const common_1 = require("@nestjs/common");
const url_service_1 = require("./url.service");
const auth_guard_1 = require("../../common/guards/auth.guard");
let UrlController = class UrlController {
    constructor(urlService) {
        this.urlService = urlService;
    }
    shortenUrl(body) {
        return this.urlService.shortenUrl(body.originalUrl, body.customUrl);
    }
    getShortUrlAnalytics(shortUrl) {
        return this.urlService.getAnalytics(shortUrl);
    }
    getUserUrlHistory(userId) {
        return this.urlService.getUrlHistory(userId);
    }
};
exports.UrlController = UrlController;
__decorate([
    (0, common_1.Post)('shorten'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UrlController.prototype, "shortenUrl", null);
__decorate([
    (0, common_1.Get)(':shortUrl/analytics'),
    __param(0, (0, common_1.Param)('shortUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UrlController.prototype, "getShortUrlAnalytics", null);
__decorate([
    (0, common_1.Get)('history/:userId'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UrlController.prototype, "getUserUrlHistory", null);
exports.UrlController = UrlController = __decorate([
    (0, common_1.Controller)('api/urls'),
    __metadata("design:paramtypes", [url_service_1.UrlService])
], UrlController);
