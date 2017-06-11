"use strict";
exports.__esModule = true;
var rep_model_1 = require("../database/model/rep.model");
var RepController = (function () {
    function RepController() {
    }
    //create new rep
    RepController.createRep = function (res, data) {
        var rep = new rep_model_1.RepModel({
            name: data.name,
            description: data.description
        });
        rep.save(function (err) {
            if (err) {
                res.send({ status: false });
            }
            else {
                res.send({ status: true });
            }
        });
    };
    //get all rep
    RepController.getAllRep = function (res) {
        rep_model_1.RepModel.find({}, function (err, reps) {
            if (!err) {
                res.send(reps);
            }
        });
    };
    RepController.getRepById = function (res, id) {
        rep_model_1.RepModel.findOne({ _id: id }, function (err, data) {
            res.send(data);
        });
    };
    return RepController;
}());
exports.RepController = RepController;
