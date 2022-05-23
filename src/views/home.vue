<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 19:18:34
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-23 14:52:10
 * @FilePath: \Bingo-manage\Bingo-management\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="index">
    <tableHeader class="header"></tableHeader>
    <!-- 左侧菜单 -->
    <el-menu
      :default-active="$router.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      router
      background-color="#001529"
      text-color="#fff"
      active-text-color="#1890ff"
      :unique-opened="true"
    >
      <el-sub-menu index="/dashboard">
        <template #title>
          <el-icon><CopyDocument /></el-icon>
          <span>仪表盘</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/dashboard/analysis">分析页</el-menu-item>
          <el-menu-item index="/dashboard/workspace">工作台</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="/userAdmin">
        <template #title>
          <el-icon><Avatar /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userAdmin/administrators">管理员列表</el-menu-item>
          <el-menu-item index="/userAdmin/ordinaryuser">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="/examine">
        <template #title>
          <el-icon><List /></el-icon>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/examine/experiment">实验查看</el-menu-item>
          <el-menu-item index="/examine/questionnaire">问卷查看</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><MilkTea /></el-icon>
          <span>xxxx</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">xxx</el-menu-item>
          <el-menu-item index="4-2">xxx</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
    <!-- 主体区域 -->
    <div class="main-context">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CopyDocument, Avatar, List, MilkTea  } from '@element-plus/icons-vue'
import tableHeader from '../components/tableHeader.vue'
</script>

<style scope>
.index{
  height: 100%;
}
.logo{
  font-size: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  margin: 0;
}
.main-context{
  float: right;
  width: 89%;
  margin: 0;
  position: absolute;
  top: 80px;
  left: 200px;
  height: 100%;
}
</style>
