require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
// import createFakeData from './createFakeData';
import jwtMiddleiware from './lib/jwtMiddleware';

const {PORT, MONGO_URI} = process.env;

mongoose.connect(MONGO_URI, {useNewUrlParser : true, useFindAndModify : false})
.then(()=>{
    console.log('Connected to MongoDB');
    // createFakeData();
})
.catch(e => {
    console.error(e);
});


const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleiware);

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, ()=> {
    console.log('Listenig to port %d'
    , port);
});
