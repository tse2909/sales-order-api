import {Router, Request, Response} from 'express';
import {ItemModel} from '../database/model/item.model';
import * as _ from 'underscore';

export class ItemController {
    constructor() {
    }


     //create new item
    static createItem(res: Response, data: any) {
        let item = new ItemModel({
            name: data.name,
            description: data.description,
            // status: data.status
        });

        item.save(function (err) {
            if (err) {
                res.send({status: false});
            } else {
                res.send({status: true});
            }
        });
    }

    //get all item
    static getAllItem(res: Response) {
        ItemModel.find({}, (err, items) => {
            if (!err) {
                res.send(items);
            }
        })
    }
}
