import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn';
import { check } from '../auth/auth.ctrl';
import * as postsCtrl from './posts.ctrl';


const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);


const post = new Router();


posts.get('/:id', postsCtrl.read);
posts.delete('/:id',checkLoggedIn, postsCtrl.remove);
posts.patch('/:id',checkLoggedIn, postsCtrl.update);


posts.use('/:id', postsCtrl.getPostById, post.routes());

const printinfo = ctx => {
    ctx.body = {
        method: ctx.method,
        path: ctx.path,
        params: ctx.params
    }
}

module.exports = posts;