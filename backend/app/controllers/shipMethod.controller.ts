import {Router, Request, Response} from 'express';
import {ShipMethodModel} from '../database/model/shipMethod.model';
import * as _ from 'underscore';

export class ShipMethodController {
    constructor() {
    }


     //create new ship method
    static createShipMethod(res: Response, data: any) {
        let shipMethod = new ShipMethodModel({
            name: data.name,
            description: data.description,
            // status: data.status
        });

        shipMethod.save(function (err) {
            if (err) {
                res.send({status: false});
            } else {
                res.send({status: true});
            }
        });
    }

    //get all ship method
    static getAllShipMethod(res: Response) {
        ShipMethodModel.find({}, (err, shipMethod) => {
            if (!err) {
                res.send(shipMethod);
            }
        })
    }
}
