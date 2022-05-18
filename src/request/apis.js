/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 19:18:34
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-17 21:32:48
 * @FilePath: \Bingo-manage\Bingo-management\src\request\apis.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";

export const getOrdinaryUser = params => {
  return request({
    method: 'GET',
    url: '/debug/users',
  })
}