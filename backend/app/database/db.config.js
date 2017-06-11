"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports.connectMongoDB = function () {
    mongoose_1.connect('mongodb://123123:123123@ds151048.mlab.com:51048/db_salesorder', function (err) {
        if (err) {
            console.log("Failed to connect to DB");
        }
        else {
            console.log("Successfully connected to MongoDB");
        }
    });
};
