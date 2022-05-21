<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="index-top">
    <el-breadcrumb-item :to="{ path: '/dashboard/workspace' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
  </el-breadcrumb>
  <el-button>添加管理员</el-button>
  <div class="table-context">
    <el-table
      style="width: 100%"
      stripe
      :data="userList">
      <el-table-column label="账号"></el-table-column>
      <el-table-column label="手机号"></el-table-column>
      <el-table-column label="邮箱"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" :icon="Delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue'
  import { getOrdinaryUser } from '../../request/apis.js'
  import { Delete } from '@element-plus/icons-vue'
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
.table-context{
  margin: 20px;
}
</style>
