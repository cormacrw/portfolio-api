"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    console.log('Incoming request!');
    console.log(req.path);
    next();
};
