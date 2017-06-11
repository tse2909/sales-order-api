"use strict";
exports.__esModule = true;
var express = require("express");
var db_config_1 = require("./database/db.config");
var api_routes_1 = require("./routes/api.routes");
var app = express();
var port = process.env.PORT || 5000;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// api router endpoint
app.use('/api', api_routes_1.ApiRoute);
app.listen(port, function () {
    db_config_1.connectMongoDB();
    console.log("Listening at port :" + port);
});
