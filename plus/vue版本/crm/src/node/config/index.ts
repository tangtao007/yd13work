// import {join} from 'path';
// import _  from 'lodash';
import * as path from 'path';
import * as _ from 'lodash';
console.log('🍎', _)
let config = {
    "viewDir": path.join(__dirname,'..',"views"),
    "staticDir": path.join(__dirname, "..","assets"),
    "baseUrl": '',
    "port":3000,
}
if(process.env.NODE_ENV == 'development'){
    const localConfig = {
        port: 3000,
        baseUrl: 'http://localhost:8080/basic/web/index.php?r=',
    }
    config = _.extend(config, localConfig)
}
if(false) {
    console.log('🍎🍎🍎🍎')
}
// 留给大家 pm2 启动
if(process.env.NODE_ENV == 'production'){
    const proConfig = {
        port: 3000,
        baseUrl: 'http://localhost:8080/basic/web/index.php?r=',
    }
    config = _.extend(config, proConfig)
}
console.log('🍎🍎🍎🍎', config);
export default config;