"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserUrlHistory = exports.getShortUrlAnalytics = exports.shortenUrl = void 0;
const url_service_1 = require("../services/url.service");
const shortenUrl = async (req, res) => {
    try {
        const { originalUrl, customUrl } = req.body;
        const { shortUrl, qrCodeUrl } = await (0, url_service_1.shortenUrlService)(originalUrl, customUrl);
        res.status(201).json({ shortUrl, qrCodeUrl });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
};
exports.shortenUrl = shortenUrl;
const getShortUrlAnalytics = async (req, res) => {
    try {
        const { shortUrl } = req.params;
        // Your logic for getting analytics
        res.status(200).json({ analytics: 'analytics data here' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
};
exports.getShortUrlAnalytics = getShortUrlAnalytics;
const getUserUrlHistory = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }
        const history = await (0, url_service_1.getUrlHistory)(req.user.id);
        res.status(200).json(history);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
};
exports.getUserUrlHistory = getUserUrlHistory;
