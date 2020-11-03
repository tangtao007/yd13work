import {IApi} from '../interface/IApi';
import {inject, TYPE, provide, TAGS} from '../ioc';
import TYPES from '../constants/types'
@provide(TAGS.ApiService)
export class ApiService implements IApi {
    private safeRequest;
    constructor(@inject(TYPES.SafeRequest) SafeRequest) {
        this.safeRequest = SafeRequest;
    }

    getInfo(arg?:Object, callback?:Function):Promise<Object> {
       return this.safeRequest.fetch('book/index', {
           method: 'GET',
           params: null
       }, callback);
    }
    saveData(arg?:Object, callback?:Function):Promise<Object> {
        console.log(arg)
       return this.safeRequest.fetch('book/create', {
            method: 'POST',
            params: arg
       }, callback);
    }


    
} 