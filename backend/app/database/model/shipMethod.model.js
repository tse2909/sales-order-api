"use strict";
exports.__esModule = true;
/*
* model for Ship Method
*/
var mongoose = require("mongoose");
var shipMethod_schema_1 = require("../schema/shipMethod.schema");
exports.ShipMethodModel = mongoose.model('shipMethod', shipMethod_schema_1.shipMethodSchema);
