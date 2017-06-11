"use strict";
exports.__esModule = true;
//schema for items
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.itemSchema = new Schema({
    name: { type: String, unique: true, dropDups: true },
    description: String,
    active: { type: Boolean, "default": true }
});
