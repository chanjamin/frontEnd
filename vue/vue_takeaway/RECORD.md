# vue_takeaway

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

|   Css   |  值    |
| ---- | ---- |
|   position absolute vs fix|   都是绝对定位，二者有一致性，也有不同点。那么二者的区别是什么呢？那就是position的fixed值定位的元素会固定在原来的位置不变，不管你如何拖动滚动条，元素都不会改变位置，这从fixed这个英文单词的意思也可以看出，“固定的，不变的，固执的”。而absolute正好相反，拖动滚动条时元素会随着改变位置。   |
|   transform:translate(x,y)   |   向x轴，y轴（右，下 ）移动   |
|    textoverflow:ellipsis  |   文本超出使用。。。替换   |

#####vue
* 组件有两种导出方式：1,vue.component();2,export;他们在props上写法有些区别
*  vuex 中使用meta属性配合v-if完成显示隐藏功能
* vuex 管理状态，state,mutation,mutation-types,action
* 模板中变量的来源：props,data,computed，其中props是组件中使用的
* @click.prevent 阻止默认行为
* vue2 method中箭头函数无法获取this对象，要用普通函数
* vue中模板解析：a.b.c三层时要考虑对象初始值是否为空问题
