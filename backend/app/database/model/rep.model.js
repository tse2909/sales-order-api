"use strict";
exports.__esModule = true;
/*
* model for Rep
*/
var mongoose = require("mongoose");
var rep_schema_1 = require("../schema/rep.schema");
exports.RepModel = mongoose.model('rep', rep_schema_1.repSchema);
