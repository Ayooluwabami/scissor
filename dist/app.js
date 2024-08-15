"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const url_routes_1 = __importDefault(require("./src/routes/url.routes"));
const authenticate_1 = __importDefault(require("./src/middleware/authenticate"));
const database_1 = __importDefault(require("./src/utils/database"));
const rateLimiter_1 = __importDefault(require("./src/middleware/rateLimiter"));
dotenv_1.default.config();
(0, database_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(rateLimiter_1.default);
app.use('/api/urls', authenticate_1.default, url_routes_1.default);
// Global error handler
app.get('/', (req, res) => {
    res.send('Welcome to Scissor URL Shortener!');
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
exports.default = app;
