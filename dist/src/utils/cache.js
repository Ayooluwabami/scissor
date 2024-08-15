"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedUrl = exports.cacheUrl = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const redis = new ioredis_1.default();
const cacheUrl = async (longUrl, shortUrl) => {
    await redis.set(longUrl, shortUrl);
};
exports.cacheUrl = cacheUrl;
const getCachedUrl = async (longUrl) => {
    const shortUrl = await redis.get(longUrl);
    if (shortUrl) {
        return { longUrl, shortUrl };
    }
    return null;
};
exports.getCachedUrl = getCachedUrl;
