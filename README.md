# neoui测试流程
## 1. 工具
* selenium-webdriver
* mocha
* grunt
* express
* chai
## 2. webdriver
初始化环境

    npm init
安装webdriver

    npm install selenium-webdriver --save-dev
下载当前系统环境相应的浏览器驱动,并放在当前项目的PATH的根目录中,[下载地址](http://seleniumhq.github.io/selenium/docs/api/javascript/)

安装chai

    npm install chai --save-dev
安装mocha

    npm install mocha --save-dev
安装express

    npm install express --save-dev

创建静态文件夹 static 测试用例文件夹tests

    mkdir static
    mkdir tests

当前文件夹结构
>yourfolder

>>tests

>>static

>>>css

>>>js

>>>index.html

>>package.json
