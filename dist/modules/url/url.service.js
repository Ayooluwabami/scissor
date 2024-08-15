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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const url_model_1 = require("./url.model");
const generate_qrcode_1 = __importDefault(require("../../common/utils/generate-qrcode"));
let UrlService = class UrlService {
    constructor(urlModel) {
        this.urlModel = urlModel;
    }
    async shortenUrl(originalUrl, customUrl) {
        const shortUrl = customUrl || this.generateShortUrl();
        const qrCodeUrl = await (0, generate_qrcode_1.default)(shortUrl);
        const newUrl = new this.urlModel({ longUrl: originalUrl, shortUrl, qrCodeUrl });
        await newUrl.save();
        return { shortUrl, qrCodeUrl };
    }
    async getAnalytics(shortUrl) {
        // Implementation for analytics
    }
    async getUrlHistory(userId) {
        return this.urlModel.find({ userId });
    }
    generateShortUrl() {
        return Math.random().toString(36).substring(2, 8);
    }
};
exports.UrlService = UrlService;
exports.UrlService = UrlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(url_model_1.Url.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UrlService);
