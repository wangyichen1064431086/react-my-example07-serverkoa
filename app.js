const Koa = require('koa');
const koaRouter = require('koa-router');
const path = require('path');
const reactview = require('./app/plugin/reactview/app.js');
//const Static = require('./app/middleware/static.js');

const App = () => {
  const app = new Koa();
  const router = koaRouter();

  router.get('/home', ctx => {
    ctx.body = ctx.render('Home', {
      microdata: {
        styleDomain: '//localhost:3000'
      },
      mydata: {
        nick: 'server render body'
      }
    }, true);
  });

  app.use(router.routes())
    .use(router.allowedMethods());

  const viewpath = path.join(__dirname, 'app/views');
  
  app.config = {
    reactview: {
      viewpath: viewpath
    }
  }

  reactview(app);

  return app;
};

const createApp = () => {
  const app = App();

  app.listen(3000, () => {
    console.log('3000 is listening!');
  });
  return app;
};

createApp();