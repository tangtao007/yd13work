import { parseScript } from "esprima";
import { Pattern } from "estree";
import CreateIoc from './ioc';

// 容量区
interface ITypes{
    [key:string]:Symbol;
}

const TYPES:ITypes = {
    indexService:Symbol.for('indexService')
}
// 管理需要注入的容器
const container = new CreateIoc();

interface IIndexService {
  log(str: string): void;
}
class IndexService implements IIndexService{
  log(str: string) {
    console.log(str);
  }
}

container.bind<IIndexService>(TYPES.indexService,IndexService)


// -------------------------分界线 应该写入另一个文件

// 获取函数的参数
function getParams(fn: Function) {
  let ast = parseScript(fn.toString());
  let node = ast.body[0];
  let fnParams: Pattern[] = [];
  if (node.type == "FunctionDeclaration") {
    fnParams = node.params;
  }
  let validParams: string[] = [];
  fnParams.forEach((obj) => {
    if (obj.type == "Identifier") {
        console.log(obj.name);
        
      validParams.push(obj.name);
    }
  });
  return validParams;
}

function controller<T extends { new (...args: any[]): {} }>(constructor: T) {
  class Controller extends constructor {
    constructor(...args: any[]) {
      super(args);
      let _params = getParams(constructor);
      console.log("🍊", _params);
      let indentity:string;
      for(indentity of _params){
          this[indentity] = container.use<IIndexService>(TYPES[indentity]);
      }
    }
  }
  return Controller;
}

@controller
class IndexController {
  private indexService: IIndexService;
  constructor(indexService?: IIndexService) {
    this.indexService = indexService;
  }
  info() {
    this.indexService.log("hello world");
  }
}

// 1.最愚蠢的办法
// const indexService = new IndexService();
// indexService.log("hello world");

//2.稍微好一点 传入实例
const instance = new IndexController();
instance.info();
