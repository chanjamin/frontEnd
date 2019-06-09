import ajax from './ajax';

/**
 * 获 取 地 址 信 息 ( 根 据 经 纬 度 串 )
 * @param geohash
 * @returns {Promise<any>}
 */
export const reqAddress = (geohash) => {
  return ajax('/api/position/' + geohash);
}

/** * 获 取 msite
 页 面 食 品 分 类 列 表
 */
export const reqCategorys = () => ajax('/api/index_category');

/** * 获 取 msite
 商 铺 列 表 ( 根 据 经 纬 度 )
 */
export const reqShop = ({lati, longti}) => ajax('/api/shops', {lati, longti});

/** * 账 号 密 码 登 录 */ export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
/** * 获 取 短 信 验 证 码 */
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
/** * 手 机 号 验 证 码 登 录 *
 */
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
/** * 获 取 用 户 信 息 ( 根 据 会 话 ) */
export const reqUser = () => ajax('/api/userinfo');
/* 请求登出
*/
export const reqLogout = () => ajax('/api/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/shop_info')
/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/shop_ratings')
/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/shop_goods')

/**
 * * 根 据 关 键 字 搜 索 相 关 商 家 数 组
 * */
export const reqSearchShop = (geohash, keyword) => ajax('/api/search_shops', {geohash, keyword})
