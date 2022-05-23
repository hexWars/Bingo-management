<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-17 21:06:34
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-23 14:53:43
 * @FilePath: \Bingo-manage\Bingo-management\src\views\dashboard\analysis\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="analysis">
    <header class="header">
      <h1>数据分析页</h1>
      <div>
        <div class="showtime">
          <div class="redd">正序</div>
          <div class="bluee">倒序</div>
        </div>
      </div>

      <div class="return">
        <el-button
          type="primary"
          plain
          style="
            background: #13afe8;
            color: #fff;
            width: 70px;
            height:15px;
            font-size: 15px;
            border-radius:25px';
            border:none;"
        >返回</el-button>
      </div>
      <div class="showtime2">时间:</div>
    </header>
  </div>
</template>

<style scoped>
.analysis {
  background: url(./images/bg.jpg);
  background-position: center;
  height: 100%;
  position: relative;
  bottom: 80px;
}
header {
  position: relative;
  height: 100px;
  background: url(./images/head_bg.png) no-repeat;
  background-size: 100% 100%;
}
.showtime {
  position: absolute;
  right: 50px;
  height: 25px;
  color: rgba(255, 255, 255, 0.9);
  top: 30px;
  margin-top: 10px;
}
.showtime2 {
  position: absolute;
  right: 50px;
  height: 25px;
  color: white;
  top: 10px;
}
.redd {
  width: 45px;
  height: 20px;
  background-color: #ff4949;
  float: left;
  text-align: center;
  border-radius: 20px;
  font-size: 11px;
  padding-top: 5px;
}
.bluee {
  width: 45px;
  height: 20px;
  background-color: #53a4e6;
  float: left;
  text-align: center;
  border-radius: 20px;
  font-size: 11px;
  padding-top: 5px;
  margin-right: 30px;
  margin-left: 20px;
}
h1 {
  margin: 0;
  padding: 0;
  font-size: 31px;
  color: #fff;
  text-align: center;
  line-height: 75px;
}
</style>