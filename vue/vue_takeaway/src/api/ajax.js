import axios from 'axios';

/**
 * axios本身返回一个promise,再外层套用一层promise直接调用axios 的promise,使用的时候是一样的，只不过返回的promise使用的数据是axiosd
 * @param url
 * @param data
 * @param type
 * @returns {Promise<any>}
 */
export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === 'GET') {
      let strData;
      Object.keys(data).forEach(function (key) {
        strData += key + '=' + data[key] + '&'
      });
      if (strData!==undefined&&strData !== '') {
        strData = strData.substring(0, strData.lastIndexOf('&'));
        url = url + '?' + strData
      }
      promise = axios.get(url);
    }
    else{
      promise=axios.post(url,data)
    }

    promise.then(response=>{
      resolve(response.data)
    })
      .catch(error=>reject(error))
  })
}
