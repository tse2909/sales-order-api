"use strict";
exports.__esModule = true;
var shipMethod_model_1 = require("../database/model/shipMethod.model");
var ShipMethodController = (function () {
    function ShipMethodController() {
    }
    //create new ship method
    ShipMethodController.createShipMethod = function (res, data) {
        var shipMethod = new shipMethod_model_1.ShipMethodModel({
            name: data.name,
            description: data.description
        });
        shipMethod.save(function (err) {
            if (err) {
                res.send({ status: false });
            }
            else {
                res.send({ status: true });
            }
        });
    };
    //get all ship method
    ShipMethodController.getAllShipMethod = function (res) {
        shipMethod_model_1.ShipMethodModel.find({}, function (err, shipMethod) {
            if (!err) {
                res.send(shipMethod);
            }
        });
    };
    return ShipMethodController;
}());
exports.ShipMethodController = ShipMethodController;
