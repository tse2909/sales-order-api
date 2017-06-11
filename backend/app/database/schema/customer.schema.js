"use strict";
exports.__esModule = true;
//schema for customer
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.customerSchema = new Schema({
    name: { type: String, unique: true, dropDups: true },
    email: String,
    phone1: String,
    phone2: String,
    location: String,
    postal: String,
    status: Boolean,
    rep_id: String,
    shipto: [],
    created_on: { type: Date, "default": Date.now }
});
