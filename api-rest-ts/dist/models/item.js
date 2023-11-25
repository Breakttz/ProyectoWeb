"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const itemSchema = new mongoose_1.Schema({
    titulo: {
        type: String,
    },
    descripcion: {
        type: String,
    }
}, {
    timestamps: true,
    versionKey: false,
});
const itemModel = (0, mongoose_1.model)('items', itemSchema);
exports.default = itemModel;
