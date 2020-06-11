"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysqul/mysql"));
const router = express_1.Router();
router.get('/grants', (req, res) => {
    const query = `
    SELECT * 
    FROM grants 
    LIMIT 1000`;
    mysql_1.default.ejecutarQuery(query, (err, grants) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                grants
            });
        }
    });
});
router.get('/grants/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM grants WHERE `OPPORTUNITY_NUMBER` = "' + id + '"';
    mysql_1.default.ejecutarQuery(query, (err, grant) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                grant: grant[0]
            });
        }
    });
});
exports.default = router;
