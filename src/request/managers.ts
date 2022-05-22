/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-22 17:16:10
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-22 17:19:43
 * @FilePath: \Bingo-manage\Bingo-management\src\request\managers.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from './request'

// 添加管理员
export const addManager = params => {
  return request({
    method: 'POST',
    url: '/bingo/managers/add'
  })
}

// 删除管理员
export const delManager = params => {
  return request({
    method: 'POST',
    url: `/bingo/managers/del/${params.id}`
  })
}

// 编辑管理员信息
export const editManager = params => {
  return request({
    method: 'POST',
    url: `/bingo/managers/edit/${params.id}`
  })
}
