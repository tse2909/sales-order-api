import {Router, Request, Response} from 'express';
import {RepModel} from '../database/model/rep.model';
import * as _ from 'underscore';

export class RepController {
    constructor() {
    }

    //create new rep
    static createRep(res: Response, data: any) {
        let rep = new RepModel({
            name: data.name,
            description: data.description,
            // status: data.status
        });

        rep.save(function (err) {
            if (err) {
                res.send({ status: false });
            } else {
                res.send({ status: true });
            }
        });
    }

    //get all rep
    static getAllRep(res: Response) {
        RepModel.find({}, (err, reps) => {
            if (!err) {
                res.send(reps);
            }
        })
    }

    static getRepById(res: Response, id) {
        RepModel.findOne({ _id: id }, function (err, data) {
            res.send(data);
        });
    }
}
