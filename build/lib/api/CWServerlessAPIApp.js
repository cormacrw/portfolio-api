"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const logRequest_1 = __importDefault(require("./middleware/logRequest"));
class CWServerlessAPIApp {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(logRequest_1.default);
    }
    static getApp() {
        if (!this.instance) {
            this.instance = new CWServerlessAPIApp();
        }
        return this.instance;
    }
    getServerlessHandler() {
        return (0, serverless_http_1.default)(this.app);
    }
    registerResources(resources) {
        resources.forEach(r => {
            switch (r.method) {
                case 'GET':
                    this.app.get(r.route, r.handler);
                    break;
                case 'POST':
                    this.app.post(r.route, r.handler);
                    break;
                case 'PATCH':
                    this.app.patch(r.route, r.handler);
                    break;
                case 'DELETE':
                    this.app.delete(r.route, r.handler);
                    break;
                case 'PUT':
                    this.app.put(r.route, r.handler);
                    break;
            }
        });
    }
}
exports.default = CWServerlessAPIApp;
