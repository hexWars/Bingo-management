/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-22 17:12:03
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-22 17:14:09
 * @FilePath: \Bingo-manage\Bingo-management\src\request\onlineExperiment.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";

//删除线上实验
export const delOnlineExperiment = params => {
  return request({
    method: 'POST',
    url: `/bingo/online-exp/del/${params.id}`
  })
}