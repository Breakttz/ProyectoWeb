"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.postItem = exports.putItem = exports.getItems = exports.getItem = void 0;
const error_handler_1 = require("../utils/error.handler");
const item_service_1 = require("../services/item.service");
const getItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_service_1.getNotice)(id);
        const data = response ? response : "NOT_FOUND";
        res.send(response);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_ITEM');
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, item_service_1.getNotices)();
        res.send(response);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_GET_ITEM');
    }
});
exports.getItems = getItems;
const putItem = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_service_1.udpateNotice)(id, body);
        res.send(response);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_PUT_ITEM');
    }
});
exports.putItem = putItem;
const postItem = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ResponseItem = yield (0, item_service_1.insertNotice)(body);
        res.send(ResponseItem);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_POST_ITEM');
    }
});
exports.postItem = postItem;
const deleteItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_service_1.deleteNotice)(id);
        res.send(response);
    }
    catch (e) {
        (0, error_handler_1.handleHttp)(res, 'ERROR_DELETE_ITEM');
    }
});
exports.deleteItem = deleteItem;
