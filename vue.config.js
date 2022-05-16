/*
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 16:21:04
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-16 16:31:07
 * @FilePath: \Bingo-manage\bingo-manage\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8849,
    // proxy: {
    //   'api': {
    //     target: '',
    //     changeOrigin: true, // 允许跨域,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}