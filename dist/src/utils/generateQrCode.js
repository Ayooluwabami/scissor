"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const QR_API_KEY = process.env.QR_API_KEY;
async function generateQrCode(qrCodeText) {
    try {
        const response = await axios_1.default.get('https://api.qr-code-generator.com/v1/create', {
            headers: {
                'Authorization': `Bearer ${QR_API_KEY}`
            },
            params: {
                qr_code_text: qrCodeText,
                image_format: 'PNG'
            }
        });
        return response.data;
    }
    catch (error) {
        console.error('QR Code Generation Error:', error);
        throw error;
    }
}
exports.default = generateQrCode;
