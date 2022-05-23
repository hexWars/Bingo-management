<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-21 22:10:17
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-23 11:15:40
 * @FilePath: \Bingo-manage\Bingo-management\src\views\dashboard\workspace\components\fastNavigation.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-card class="dynamics-card">
      <template #header>
        <div style="color: #fffff6; font-size: 18px; font-weight: blod">
          快速开始 / 便捷导航
        </div>
      </template>
      <ul class="nav-list">
        <li v-for="nav in navList" class="nav-list-item" :key="nav.to">
          <router-link :to="nav.to">{{nav.label}}</router-link>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  interface rouerList{
    to:string,
    label:string
  }
  const navList:Array<rouerList> = [
    {
      to: '/dashboard/analysis',
      label: '分析页'
    },
    {
      to: '/dashboard/workspace',
      label: '工作台'
    },
    {
      to: '/userAdmin/administrators',
      label: '管理员列表'
    },
    {
      to: '/userAdmin/ordinaryuser',
      label: '用户列表'
    },
    {
      to: '/examine/experiment',
      label: '实验查看'
    },
    {
      to: '/examine/questionnaire',
      label: '问卷查看'
    }
  ]
</script>


<style scoped>
:deep(.el-card__header) {
  background-image: linear-gradient(
    to right,
    #00c6ff 0%,
    #0072ff 51%,
    #00c6ff 100%
  );
}
.nav-list {
  list-style: none;
  padding-left: 0;
  text-align: center;
}
.nav-list-item {
  display: inline-block;
  width: 25%;
  margin-bottom: 30px;
  font-size: 16px;
  font-family: "Microsoft YaHei", "微软雅黑";
}
.nav-list-item a {
  color: rgba(0, 0, 0, 0.85);
  text-decoration: none;
}
</style>