"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_1 = __importDefault(require("qrcode"));
const generateQrCode = async (text) => {
    try {
        return await qrcode_1.default.toDataURL(text);
    }
    catch (err) {
        throw new Error('Failed to generate QR code');
    }
};
exports.default = generateQrCode;
