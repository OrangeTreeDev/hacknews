# hacknews
基于dva前端框架，以及hacknews的firebase接口，实现文章的类型切换以及多页显示,参考

# 构建

安装依赖
```bash
npm install
````
运行开发环境
```bash
npm start
```

# 进度
- 2017.5.24
  - 按照`router`/`componet`/`css`/`modle`/`service`分离原则，搭建项目
  - sagas异步加载hacknews数据，并用react渲染显示。

- 2017.5.26
  - 实现top类型文章的分页显示

- 2017.6.1
  - 实现加载动画
  - 用户详情页
  
- 2017.6.6
  - 实现评论列表的嵌套层叠显示
  
- 2017.6.20
  - 修改评论页面，把评论数据的结构从多维数组改为以为数组，优化渲染速度
