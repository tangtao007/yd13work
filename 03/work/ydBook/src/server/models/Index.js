/** 
 * @fileoverview 实现Index的数据模型
 * @author tangtao_mail@sina.com
 */

const SafeRequest = require("../utils/SafeRequest.js");
/** 
 *  Index类 获取后台关于图书相关的数据类
 * @class
 */

class Index {

    /**
     *Creates an instance of Index.
     * @constructor
     * @param {*} app koa2执行上下文
     * @memberof Index
     */
    constructor(app){}

    /**
     *
     *获取后台全部图书的数据方法
     * @param {*} options 配置项
     * @returns new Promise()
     * @memberof Index
     */
    getData(){
        const safeRequest = new SafeRequest("books/list");
        return safeRequest.fetch({});
    }

    /**
     *
     *保存图书
     * @param {*} options 配置项
     * @returns new Promise()
     * @memberof Index
     */
    saveData(options){
        const safeRequest = new SafeRequest("books/create");
        return safeRequest.fetch({
            method:"post",
            params:options.params
        });
    }
}

module.exports = Index;