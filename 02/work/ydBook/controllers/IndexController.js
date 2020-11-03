const Index = require('../models/Index');
const {URLSearchParams} = require('url');
class Indexcontroller {
    constructor() {}
    actionIndex() {
        return async (ctx, next) => {
            const index = new Index();
            const result = await index.getData();
            ctx.body = await ctx.render('index', {
                data: result.data.data
            });b;length/
        };
    }
    actionAdd() {
        return async (ctx, next) => {
            const index = new Index();
            const params = new URLSearchParams();
            params.append("Book[name]", "测试");
            params.append("Book[author]", "测试1111");
            const result = await index.saveData({
                params
            });
            ctx.body = result;
        }
    }
}

module.exports = Indexcontroller;