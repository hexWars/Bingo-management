<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 20:15:55
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-17 22:02:23
 * @FilePath: \Bingo-manage\Bingo-management\src\components\tableHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-card class="box-card" id="pageHeader">
    <div class="logo">超级管理员</div>
    <p>{{timeGreeting}} | 管理员  我猜你可能累了</p>
    <el-dropdown @command="changeLanguage">
      <span class="el-dropdown-link">
        <el-icon><Setting /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="home()">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-card>
</template>

<script setup>
  import { Setting } from '@element-plus/icons-vue'
  const timeGreeting = new Date(Date.now()).getHours() > 12 ? '下午好' : '早上好'

</script>

<style scoped>
.el-card {
  height: 80px;
}
.box-card{
  border: 0;
  border-radius: 0;
}
.logo{
  position: absolute;
  height: 80px;
  width: 199px;
  background-color: #001529;
  color: #fff;
  top: 0;
  left: 0;
  text-align:center;
  line-height:80px;
}
.el-dropdown{
  position: absolute;
  top: 40px;
  right: 260px;
}
</style>