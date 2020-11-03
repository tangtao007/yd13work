import { TAGS, inject, provideThrowable,interfaces, TYPE, httpGet, controller, Router } from '../ioc';
@provideThrowable(TYPE.Controller, "IndexController")
@controller('/')
export default class IndexController implements interfaces.Controller {
    private apiService;
    // aop
    constructor(@inject(TAGS.ApiService) ApiService) {
        // di
        this.apiService = ApiService;
    }
    @httpGet("/")
    private async test(ctx: Router.IRouterContext, next: () => Promise<any>){
        // const result: Promise<Object> = await this.apiService.getInfo('localhost:400');   
        // 去向php请求数据， data回来
        ctx.body = await ctx.render('index', {
            data: '我是ssr渲染的'
        });
    }

}  