import Vue from 'vue'
import moment from 'moment'
Vue.filter("formatDate",function (date, formStr="YYYY-MM-DD HH:mm:ss") {
  return moment(date).format(formStr);
})

