import * as express from 'express';
import { connectMongoDB } from './database/db.config';
import { ApiRoute } from './routes/api.routes';
const app: express.Application = express();
const port: number = process.env.PORT || 5000;

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// api router endpoint
app.use('/api', ApiRoute);

app.listen(port, () => {
    connectMongoDB();
    console.log(`Listening at port :${port}`);
});
