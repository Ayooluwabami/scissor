"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
const isValidUrl = (urlString) => {
    try {
        new URL(urlString);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isValidUrl = isValidUrl;
