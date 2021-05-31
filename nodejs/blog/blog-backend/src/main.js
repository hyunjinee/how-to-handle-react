
require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';
import createFakeData from './createFakeData';
import jwtMiddleware from './lib/jwtMiddleware';




const app = new Koa();
const { PORT, MONGO_URI} = process.env;
// const api = require('./api');

mongoose.connect(MONGO_URI, {useNewUrlParser:true, useFindAndModify: false})
.then(()=> {

    console.log('connected to MongoDB');
    createFakeData();
})
.catch((e)=> console.error(e));




const router = new Router();


// router.use('./api', api.routes());
app.use(bodyParser());
app.use(jwtMiddleware);


app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;




// router.get('/', ctx=> {
//     ctx.body = '홈';
// })

// router.get('/about/:name?', ctx => {

//     const {name} = ctx.params;

//     ctx.body = name ? `${name}의 소개` : `소개`;
// })

// app.use(router.routes()).use(router.allowedMethods());





app.listen(4000, ()=> {
    console.log('Listening on port 4000')
})