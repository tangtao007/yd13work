import { TAGS, inject, provideThrowable,interfaces, TYPE, httpGet, httpPost, controller, Router } from '../ioc';
import { ApiService } from '../service/ApiService';
@provideThrowable(TYPE.Controller, "ApiController")
@controller('/api')
export default class ApiController implements interfaces.Controller {
    private apiService;
    // aop
    constructor(@inject(TAGS.ApiService) ApiService) {
        // di
        this.apiService = ApiService;
    }
    @httpGet("/getInfo")
    private async getInfo(ctx: Router.IRouterContext, next: () => Promise<any>){
        // const result: Promise<Object> = await this.apiService.getInfo('localhost:400');
        const result = await this.apiService.getInfo();
        ctx.body = result;
    }
    @httpPost("/saveData")
    private async saveData(ctx: Router.IRouterContext, next: () => Promise<any>){
        console.log('🍎', ctx.request.body);
        const params = new URLSearchParams();
        params.append("Book[bookName]", ctx.request.body.name);
        params.append("Book[author]", "测试作者1111");
        params.append("Book[bookId]", ctx.request.body.price);
        params.append("Book[price]", ctx.request.body.price);
        params.append("Book[borrowTime]", ctx.request.body.price);
        params.append("Book[borrowDuration]", ctx.request.body.price);
        params.append("Book[isBorrow]", ctx.request.body.price);
        const result = await this.apiService.saveData(params);
        ctx.body = result;
    }

}  