"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const mongoose_1 = __importDefault(require("mongoose"));
// Mock the cache functions
jest.mock('../../src/utils/cache', () => ({
    cacheUrl: jest.fn(),
    getCachedUrl: jest.fn(() => null)
}));
beforeAll(async () => {
    await mongoose_1.default.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
});
describe('URL Routes', () => {
    it('should shorten a URL and return the short URL', async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/api/shorten')
            .send({ longUrl: 'https://www.example.com' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('shortUrl');
    });
    it('should get URL history for a user', async () => {
        // Note: For testing URL history, you might need to mock authentication
        const response = await (0, supertest_1.default)(app_1.default).get('/api/history');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
