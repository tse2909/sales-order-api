/*
* model for Rep
*/
import * as mongoose from 'mongoose';
import { repSchema } from '../schema/rep.schema';

export const RepModel = mongoose.model('rep',repSchema); 
