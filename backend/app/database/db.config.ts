import {connect} from 'mongoose';

export const connectMongoDB = () => {
    connect('mongodb://123123:123123@ds151048.mlab.com:51048/db_salesorder', (err) => {
        if (err) {
            console.log("Failed to connect to DB");
        } else {
            console.log("Successfully connected to MongoDB");
        }
    });
}