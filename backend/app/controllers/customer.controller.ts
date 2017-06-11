import {Router, Request, Response} from 'express';
import {CustomerModel} from '../database/model/customer.model';
import * as _ from 'underscore';

export class CustomerController {
    constructor() {
    }

    static createNewCustomer(res: Response, data: any) {
        let isDataInserted: boolean = false;
        let customer = new CustomerModel({
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
            } else {
                res.send({ status: true });
            };
        })

    }

    //get all customers
    static getAllCustomers(res: Response, paginationCount: any) {
        if (paginationCount == 'all') {
            CustomerModel.find({}, function (err, data) {
                res.send(data);
            })
        } else {
            let skip_count = (paginationCount - 1) * 50;
            CustomerModel.find({}).sort('normalize').skip(skip_count).limit(50).exec((err, customers) => {
                res.send(customers);
            });
        }
    }
}