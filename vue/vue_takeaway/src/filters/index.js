import Vue from 'vue'
import {format} from 'date-fns'
Vue.filter("formatDate",function (date, formStr="YYYY-MM-DD HH:mm:ss") {
  return format(date,formStr);
})

