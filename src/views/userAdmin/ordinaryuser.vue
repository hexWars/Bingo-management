<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="index-top">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<script setup>
  import { ref, onBeforeMount } from 'vue'
  import { getOrdinaryUser } from '../../request/apis.js'
  import { ArrowRight } from '@element-plus/icons-vue'
  // 小程序注册成员列表
  const userList = ref([])
  // 获取成员列表
  const getUserList = async () => {
    const res = await getOrdinaryUser()
    console.log('----------',res)
  }

  // 挂载之前
  onBeforeMount(() => {
    getUserList()
  })
</script>

<style scoped>
</style>