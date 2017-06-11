/*
* model for Item
*/
import * as mongoose from 'mongoose';
import { itemSchema } from '../schema/item.schema';

export const ItemModel = mongoose.model('item',itemSchema); 
