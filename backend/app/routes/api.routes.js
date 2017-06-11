"use strict";
exports.__esModule = true;
var express_1 = require("express");
var customer_controller_1 = require("../controllers/customer.controller");
var item_controller_1 = require("../controllers/item.controller");
var rep_controller_1 = require("../controllers/rep.controller");
var shipMethod_controller_1 = require("../controllers/shipMethod.controller");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send("Welcome to API routes");
});
router.post('/customer/create', function (req, res) {
    customer_controller_1.CustomerController.createNewCustomer(res, req.body);
});
router.get('/customer/all/page=:paginator', function (req, res) {
    customer_controller_1.CustomerController.getAllCustomers(res, req.params.paginator);
});
router.post('/item/create', function (req, res) {
    item_controller_1.ItemController.createItem(res, req.body);
});
router.get('/item/all', function (req, res) {
    item_controller_1.ItemController.getAllItem(res);
});
router.post('/rep/create', function (req, res) {
    rep_controller_1.RepController.createRep(res, req.body);
});
router.get('/rep/all', function (req, res) {
    rep_controller_1.RepController.getAllRep(res);
});
router.get('/rep/id/:id', function (req, res) {
    rep_controller_1.RepController.getRepById(res, req.params.id);
});
router.post('/shipMethod/create', function (req, res) {
    shipMethod_controller_1.ShipMethodController.createShipMethod(res, req.body);
});
router.get('/shipMethod/all', function (req, res) {
    shipMethod_controller_1.ShipMethodController.getAllShipMethod(res);
});
exports.ApiRoute = router;
