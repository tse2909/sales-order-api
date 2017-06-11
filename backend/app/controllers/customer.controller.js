"use strict";
exports.__esModule = true;
var customer_model_1 = require("../database/model/customer.model");
var CustomerController = (function () {
    function CustomerController() {
    }
    CustomerController.createNewCustomer = function (res, data) {
        var isDataInserted = false;
        var customer = new customer_model_1.CustomerModel({
            name: data.name,
            rep_id: data.rep_id,
            email: data.email,
            phone1: data.phone1,
            phone2: data.phone2,
            location: data.location,
            postal: data.postal,
            status: data.status
        });
        customer.save(function (err, newData) {
            if (err) {
                res.send({ status: false });
            }
            else {
                res.send({ status: true });
            }
            ;
        });
    };
    //get all customers
    CustomerController.getAllCustomers = function (res, paginationCount) {
        if (paginationCount == 'all') {
            customer_model_1.CustomerModel.find({}, function (err, data) {
                res.send(data);
            });
        }
        else {
            var skip_count = (paginationCount - 1) * 50;
            customer_model_1.CustomerModel.find({}).sort('normalize').skip(skip_count).limit(50).exec(function (err, customers) {
                res.send(customers);
            });
        }
    };
    return CustomerController;
}());
exports.CustomerController = CustomerController;
