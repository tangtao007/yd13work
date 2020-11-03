import {join} from 'path';
import _ from "lodash";
// import {extend} from "lodash-es"; // 这里就是当使用什么函数的时候，才引用
let config = {
    "viewDir": join(__dirname,"..","views"),
    "staticDir":join(__dirname,"..","assets")
}

if(process.env.NODE_ENV == 'development'){
    const localConfig = {
        baseUrl:"https://www.easy-mock.com/mock/59b75661e0dc663341a682c6/example/",
        caseModel: false,
        port: 3000
    }
    config = _.extend(config,localConfig);
}

if(process.env.NODE_ENV == 'production'){
    const prodConfig = {
        caseModel: "memory",
        port: 8081
    }
    config = _.extend(config,prodConfig);
}

module.exports = config;