/*
* model for Ship Method
*/
import * as mongoose from 'mongoose';
import { shipMethodSchema } from '../schema/shipMethod.schema';

export const ShipMethodModel = mongoose.model('shipMethod',shipMethodSchema); 
