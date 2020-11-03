import { Container, inject } from "inversify";
import { interfaces, controller, httpGet, TYPE, InversifyKoaServer, httpPost } from 'inversify-koa-utils';
import { provide, buildProviderModule, fluentProvide} from "inversify-binding-decorators";
import TAGS from '../constants/tags';
import * as Router from 'koa-router';
let provideThrowable = function(identider, name) {
    return fluentProvide(identider)
    .whenTargetNamed(name)
    .done();
}
export {
    Container,
    interfaces,
    TYPE,
    provide,
    inject,
    buildProviderModule,
    httpGet,
    httpPost,
    controller,
    TAGS,
    Router,
    InversifyKoaServer,
    provideThrowable
}