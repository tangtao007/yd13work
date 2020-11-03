const Koa = require('koa');
const render = require('koa-swig');
const server = require('koa-static');
const path = require('path');
const app = new Koa();
const co = require('co');
const errorHandler = require('./middlewares/errorHandler');
const log4js = require('log4js');
const config = require('./config');
app.use(server(config.staticDir));
// 注入我们的路由机制
app.context.render = co.wrap(render({
    root: path.join(config.viewDir),
    autoescape: true,
    cache: config.caseModel, // disable, set to false 
    ext: 'html',
    writeBody: false,
    varControls: ["[[","]]"]
}));
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'logs/yd.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
errorHandler.error(app,logger);
require('./controllers')(app);
app.listen(config.port,()=>{
    console.log("服务已经启动");
});