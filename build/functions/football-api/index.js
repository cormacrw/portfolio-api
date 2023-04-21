"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const CWServerlessAPIApp_1 = __importDefault(require("../../lib/api/CWServerlessAPIApp"));
const resources_1 = __importDefault(require("./resources"));
const app = CWServerlessAPIApp_1.default.getApp();
app.registerResources(resources_1.default);
exports.handler = app.getServerlessHandler();
