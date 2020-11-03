# yd-vue-custom

## 技术栈 webpack + vue + ts

vue 官方文档 https://cn.vuejs.org/

## 开发构建

### 目录结构

```bash
├── /build/          #
├── /config/         # 配置目录
├── /dist/           # 打包输出目录
├── /src/            # 项目源码目录
│ ├── /api/          #
├── package.json     # 项目依赖信息
```

### 命名规范

组件：首字母大写，每个单词首字母大写。列如：StandardTable
页面：全部小写，每个单词用下划线链接。列如：menu_list.js
接口 sevices:首字母小写的驼峰命名，以 Api 结尾。列如：userApi.js
model:首字母小写的驼峰命名，以 Model 结尾。列如：userModel.js

## 安装运行项目

下载安装开发工具，建议使用 vscode

```bash
下载地址：https://code.visualstudio.com/
```

下载安装 node.js

```bash
下载地址：https://nodejs.org/en/
```

使用淘宝镜像加速

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装依赖，为了提高下载速度建议使用 cnpm.

```bash
$ npm i 或 cnpm i
```

运行工程.

```bash
$ npm run dev
```

测试环境打包.

```bash
$ npm run prod
```

## 打包发布路径

dist/
