"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    nameusuario: {
        type: String,
        require: true,
        unique: true,
    },
    rut: {
        type: String,
        require: true,
    },
    region: {
        type: String,
        require: true,
    },
    comuna: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    }
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = (0, mongoose_1.model)('users', UserSchema);
exports.default = UserModel;
