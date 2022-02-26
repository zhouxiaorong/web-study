{// 2.1
  /* 
    16.3.2
    Facebook 推出
    2013年开源
    函数式编程
    使用人数最多的前端框架
    健全的文档与完善的社区
        reactjs.org
    React Fiber:
        16版本或者16版本中的底层实现
        16之后的reactjs称之为 Reaction Fiber
        16版本中，react底层在事件循环中加入了优先级的概念，可以利用事件循环的一些碎片时间，执行一些高优先级的用户交互，提高reactjs使用过程中的用户体验
    React.js vs vue.js
        React.js
          1. 灵活性更大一些，处理一些非常复杂的业务时，会有更多的技术方案可以选择
            -> 适合复杂度比较高的项目
        vue.js
          1. 提供了更丰富的api,实现功能会更简单（因为api多，灵活性有一定的限制）
            -> 面向用户端的复杂度不是特别高的项目
          2. 也可以做大型项目，
        2. 
        3. 
        4. 
        5. 
  */
}
{// 2.2 开发环境准备
  /* 
    使用方式：
      1. 使用script标签引用.js文件来使用React

      2. 通过脚手架工具来编码


    脚手架工具(Grunt\webpack\Gulp)
      1. 前端开发过程中的辅助工具，会自动的构建一个大型项目的开发流程和目录，允许以一定的方式去实现js文件的相互引用，使可以更方便的管理项目
      2. 在脚手架中写的代码不能直接运行，需要脚手架工具做代码编译，编译出来的代码才可以被浏览器识别运行
      Create-react-app: react 官方提供的脚手架工具，使用简单，可定制性强，调试代码方便 

    npx
      npx是npm 5.2+附带的打包运行程序工具。
     
    npm 操作
      npm start: 启动开发服务器。
      npm run build: 将应用程序打包成静态文件以供生产使用。
      npm test: 启动测试运行程序。
      npm run eject: 删除此工具并复制生成依赖项、配置文件，并将脚本放入应用程序目录（如果这样做，就不能回去了！）

    start
      1. npm install -g create-react-app
      2. create-react-app my-app
      3. yarn start
    start2
      1. npx create-react-app my-app
  */
}
{// 2.3 工程目录文件
  /* 
    |--node_modules                             // 项目依赖的第三方包
    |--public                             // 
    |   |-- favicon.ico                      // 
    |   |-- index.html                      // 项目首页html模板
    |   |-- manifest.json                      // 定义了网页如果可以当APP使用，就可以存储在桌面上
    |--src                             // 项目所有的源代码
    |   |-- index.js                      // 所有代码    的  入口
    |--.gitignore                             // git上传需要忽略的文件格式
    |--package.json                             // 项目基本信息,包依赖信息等（主要是 node 的一些内容，node的包文件，能把项目变成包） 
    |--README.md                            // 项目介绍（markdown语法）
    |--yarn.lock                             // 项目依赖安装包版本号限制（不要动）
    |   |--                      //   
  
  */
}
{// 2.4 react 中的组件
  /* 
  
  */
}
{// 2.5 React 中最基础的JSX语法
  /* 
    1. 可以在 js 中使用 html 标签。
    2. 可以在 js 中使用自定义标签。
    3. JSX语法中，如果我们要使用自己创建的组件，组件必须以大写字母开头。
    4. 当一个标签是以大写字母开头时，在 JSX 一般就是一个组件。
    5. 当一个标签是以小写字母开头时，在 JSX 一般就是 H5 标签。
  */
}
{// 3.1 使用 React 编写 TodoList 功能
   
}
{// 3.2 Reaction中的响应式设计思想和事件绑定
}
{// 3.3实现 TodoList 新增删除功能
}
{// 3.4 JSX语法细节补充
}
{// 3.5 拆分组件与组件之间的传值
}
{// 3.6 TodoList 代码优化
}
{// 3.7 围绕 React 衍生出的思考
}
{// 3.
}