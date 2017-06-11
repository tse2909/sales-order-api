"use strict";
exports.__esModule = true;
var item_model_1 = require("../database/model/item.model");
var ItemController = (function () {
    function ItemController() {
    }
    //create new item
    ItemController.createItem = function (res, data) {
        var item = new item_model_1.ItemModel({
            name: data.name,
            description: data.description
        });
        item.save(function (err) {
            if (err) {
                res.send({ status: false });
            }
            else {
                res.send({ status: true });
            }
        });
    };
    //get all item
    ItemController.getAllItem = function (res) {
        item_model_1.ItemModel.find({}, function (err, items) {
            if (!err) {
                res.send(items);
            }
        });
    };
    return ItemController;
}());
exports.ItemController = ItemController;
