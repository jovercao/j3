# J3企业快速开发平台

![J3](./img/logo.png)

> J3是一套全栈使用JS语言开发的快速开发平台，并且覆盖多平台，从桌面到移动，从Windows到MacOS到Linux。J3全部采用模块化设计，所有功能均可拆分/组合，整个J3包含两个部分：
> - J3开发框架
> - J3企业套件
> J3的宗旨——开足马力，为企业开发加速！

## 入门

### 功能简介

系统主要分成两个部分。

#### 开发框架

开发框架主要包括以下模块：

* core - 系统核心
* module - 模块管理，基于`npm`实现
* ui - 系统界面，包含一套基础控件库，基于`vue.js`实现
* db - 数据库，基于`node-orm`实现
* svc - 服务，基于`express`实现
* util - 工具类型库
* runner - 移动端基于`weex`实现，桌面端基于`electron`实现

#### 企业套件

* cli - 企业UI中心，所有表单以及开发工具均在此处运行，可自定义系统UI构成，可切换语言
* edb - 企业账套管理，含数据备份工具等。
* right - 权限控制中心
* update - 企业自动升级工具，为企业
* dev - 企业开发中心
  * edb - 数据中心，集成了数据定义，数据脚本编写，执行等功能
  * esvc - 服务中心，可支持自定义服务，如查询数据、
  * page - 表单开发工具，支持模板扩展，基础模块包括CRUD等数据表单
  * flow - 审批流程定义
  * report - 报表中心
  * msg - 企业即时通讯工具，集邮件、短信、即时通讯一体的通讯工具

#### 应用仓库

在下一个规划中完成

### 安装指引

``` bash
# 下载
git clone git@github.com:jovercao/j3.git

# 安装依赖包
npm install

# 启动应用
npm start

# 启动调试
npm run debug
```

### 自定义模块

采用与npm完全兼容的包处理方式，具体协议可参考[npm文档](https://docs.npmjs.com/)，package.json定义可参考[package.json](https://docs.npmjs.com/files/package.json)。

需要注意的是`package.json`中，如有需要配置的，请在此处配置安装初始化命令。

```json
{
  "name": "right",
  "description": "权限控制模块",
  "version": "1.0",
  "depencends": [
    "core@1.0",
    "ui@1.0",
    "db@1.0",
    "util@1.0",
    "svc@1.0"
  ],
  "scripts": {
    "install": "你要运行的安装脚本"
  }
}
```

## API文档

