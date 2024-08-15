"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlHistory = exports.shortenUrlService = void 0;
const url_model_1 = __importDefault(require("../models/url.model"));
const generateQrCode_1 = __importDefault(require("../utils/generateQrCode"));
const shortenUrlService = async (originalUrl, customUrl) => {
    const shortUrl = customUrl || generateShortUrl();
    const qrCodeUrl = await (0, generateQrCode_1.default)(shortUrl); // Generate QR code for the shortened URL
    const newUrl = new url_model_1.default({ longUrl: originalUrl, shortUrl, qrCodeUrl }); // Save QR code URL along with shortened URL
    await newUrl.save();
    return { shortUrl, qrCodeUrl };
};
exports.shortenUrlService = shortenUrlService;
const getUrlHistory = async (userId) => {
    return await url_model_1.default.find({ userId });
};
exports.getUrlHistory = getUrlHistory;
const generateShortUrl = () => {
    return Math.random().toString(36).substring(2, 8);
};
