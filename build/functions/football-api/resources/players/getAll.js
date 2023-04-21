"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoint = {
    method: 'GET',
    route: '/players',
    handler(req, res) {
        res.send({
            success: true,
            message: 'HELLO!'
        });
    },
};
exports.default = endpoint;
