// eslint-disable-next-line no-undef
const Koa = require('koa')
const app = new Koa();
const Router = require('koa-router');


const router = new Router();



router.get('/', ctx=> {
    ctx.body = '홈';
})

router.get('/about/:name?', ctx => {

    const {name} = ctx.params;

    ctx.body = name ? `${name}의 소개` : `소개`;
})

app.use(router.routes()).use(router.allowedMethods());





app.listen(4000, ()=> {
    console.log('Listening on port 4000')
})