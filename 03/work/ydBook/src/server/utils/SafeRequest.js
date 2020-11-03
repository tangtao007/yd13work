const fetch = require("node-fetch");
const config = require('../config');

class SafeRequest{
    constructor(url){
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    fetch(options){
        let urlFetch = fetch(this.baseUrl + this.url);
        if(options.params){
            urlFetch = fetch(this.baseUrl + this.url,{
                method:options.method,
                body:options.params
            });
        }
        return new Promise((resolve,reject)=>{
            let result = {
                code:0,
                message:"",
                data:{}
            }
            urlFetch
            .then(res=>res.json())
            .then((json)=>{
                result.data = json;
                resolve(result);
            }).catch((error)=>{
                result.code = 1;
                result.message = "node-fetch和后端通讯异常";
                reject(result);
            })
        });
    }
}

module.exports = SafeRequest;