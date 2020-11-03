import * as fetch from 'node-fetch';
import { provide } from '../ioc';
import TYPES from '../constants/types';
import { ISafeRequest } from "../interface/ISafeRequest";
import config from '../config';
// 提供
@provide(TYPES.SafeRequest)
export class SafeRequest implements ISafeRequest {
    public async fetch(url: string, arg, callback?: Function): Promise<Object> {
        return new Promise((resolve, reject) => {
            let result = {
                code: 0,
                message: '请求成功',
                data: []
            }
            console.log(config.baseUrl + url)
            let selfFetch = fetch(config.baseUrl + url);
            if (arg.params) {
                selfFetch = fetch(config.baseUrl + url, {
                    method: arg.method,
                    body: arg.params
                })
            }
            selfFetch
                .then(res => {
                    return res.json();
                })
                .then((json) => {
                    result.data = json;
                    resolve(result);
                }).catch(error => {
                    result.code = 1;
                    result.message = 'node-fetch请求失败， 后端报警';
                    reject(result);
                })
        })

    }
}