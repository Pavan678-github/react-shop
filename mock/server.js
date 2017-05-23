var Koa = require('koa');
var Router = require('koa-router');
var staticServer = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(staticServer('build', { index: 'index.html' }));

app.use(async function(ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  ctx.set('Access-Control-Allow-Origin', '*');
})

router.get('/', function(ctx, next) {
  ctx.body = 'hello koa !'
});

router.get('/api', function(ctx, next) {
  ctx.body = 'test data'
});
router.get('/api/homead', function(ctx, next) {
  ctx.body = require('./home/ad.js')
});
router.get('/api/homelist/:city/:page', function(ctx, next) {
  ctx.body = require('./home/list.js')
});

router.get('/api/search/:page/:city/:category/:keyword', function(ctx, next) {
  ctx.body = require('./home/list.js')
})


router.get('/api/detail/info/:id', function(ctx, next) {
  ctx.body = require('./detail/info.js')
})

router.get('/api/detail/comment/:page/:id', function(ctx, next) {
  ctx.body = require('./detail/comment.js')
})

router.get('/api/orderlist/:username', function(ctx, next) {
  ctx.body = require('./orderlist/orderList.js')
})


router.post('/api/submitComment', function(ctx, next) {
  ctx.body = {
    errno: 0,
    msg: 'ok'
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3001);
