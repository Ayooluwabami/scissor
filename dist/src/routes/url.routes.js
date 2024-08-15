"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_controller_1 = require("../controllers/url.controller");
const authenticate_1 = __importDefault(require("../middleware/authenticate"));
const router = (0, express_1.Router)();
router.post('/shorten', authenticate_1.default, url_controller_1.shortenUrl);
router.get('/analytics/:shortUrl', authenticate_1.default, url_controller_1.getShortUrlAnalytics);
router.get('/history', authenticate_1.default, url_controller_1.getUserUrlHistory);
exports.default = router;
