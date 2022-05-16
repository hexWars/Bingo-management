<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 19:18:34
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-16 20:44:38
 * @FilePath: \Bingo-manage\Bingo-management\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="index">
    <tableHeader class="header"></tableHeader>
    <el-radio-group v-model="isCollapse" class="chooseState">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting, SetUp } from '@element-plus/icons-vue'
import tableHeader from '../components/tableHeader.vue'
  // 默认折叠
  const isCollapse = ref(false)
</script>

<style scope>
.index{
  height: 100%;
}
.chooseState{
  display: flex;
  margin:20px;
  transform: translateY(-80px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  transform: translateY(-80px);
}
</style>
