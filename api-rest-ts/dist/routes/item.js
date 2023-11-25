"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const item_1 = require("../controllers/item");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/:id", item_1.getItem);
router.get("/", item_1.getItems);
router.post("/", item_1.postItem);
router.put("/:id", item_1.putItem);
router.delete("/:id", item_1.deleteItem);
