import * as bodyParser from "koa-bodyparser";
import "reflect-metadata";
import { InversifyKoaServer } from "inversify-koa-utils";
import { Container,buildProviderModule } from './ioc';
import co from 'co';
import * as render from "koa-swig";
import * as serve from 'koa-static';
import  historyApiFallback from 'koa2-connect-history-api-fallback';
import './ioc/loader';
import config from './config';

//inversify配置
const container = new Container();
container.load(buildProviderModule());
let server = new InversifyKoaServer(container);
server
  .setConfig(app  => {
    app.use(bodyParser());
    app.use(serve(config.staticDir));
    app.context.render = co.wrap(render({
      root: config.viewDir,
      autoescape: true,
      cache:false,
      ext: 'html',
      varControls: ["[[", "]]"],
      writeBody: false
    }));
    app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));
  })

//初始化socketio服务器

let app = server.build();
app.listen(3000, () => {
  console.log("小火箭起飞🚀🚀🚀🚀");
});
