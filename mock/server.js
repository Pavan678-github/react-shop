var Koa = require('koa');
var Router = require('koa-router');

const app = new Koa();
const router = new Router();

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
  const params = ctx.params
  const paramsCity = params.city
  const paramsPage = params.page

  ctx.body = require('./home/list.js')
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3001);
