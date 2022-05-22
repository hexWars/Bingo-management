/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 19:18:34
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-22 18:15:02
 * @FilePath: \Bingo-manage\Bingo-management\src\request\apis.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";

// 所有的用户信息
export const getallUsers = () => {
  return request({
    method: 'GET',
    url: '/bingo/user/allusers'
  })
}