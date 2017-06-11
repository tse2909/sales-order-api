//schema for items
import * as mongoose from 'mongoose';
let Schema = mongoose.Schema;

export let shipMethodSchema = new Schema({
    name: {type: String, unique: true, dropDups: true},
    description: String,
    active: {type: Boolean, default: true},
});
