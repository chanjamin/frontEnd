'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})

//等同于以下requierjs，复习下

// require(['webpack-merge','./prod.env'],function (merge,prodEnv) {
//   return{
//     NODE_ENV:merge(prodEnv,{NODE_ENV: '"devel'})
//   }
// })
