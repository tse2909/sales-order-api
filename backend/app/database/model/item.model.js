"use strict";
exports.__esModule = true;
/*
* model for Item
*/
var mongoose = require("mongoose");
var item_schema_1 = require("../schema/item.schema");
exports.ItemModel = mongoose.model('item', item_schema_1.itemSchema);
