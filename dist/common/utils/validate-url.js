"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = void 0;
const url_1 = require("url");
const validateUrl = (url) => {
    try {
        const parsedUrl = (0, url_1.parse)(url);
        return parsedUrl.protocol && parsedUrl.host;
    }
    catch {
        return false;
    }
};
exports.validateUrl = validateUrl;
