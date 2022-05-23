<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-17 21:20:12
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-23 14:20:29
 * @FilePath: \Bingo-manage\Bingo-management\src\views\userAdmin\ordinaryUser.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-breadcrumb class="index-top">
    <el-breadcrumb-item :to="{ path: '/dashboard/workspace' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="table-context">
    <el-table
      style="width: 100%"
      stripe
      :data="userList">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="昵称" prop="nickname"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="oppid" prop="openid"></el-table-column>
      <el-table-column label="学校" prop="schoolName"></el-table-column>
      <el-table-column label="学号" prop="schoolNumber"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" :icon="Share" circle></el-button>
          <el-button type="danger" :icon="Delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script setup lang="ts">
  import { ref, onBeforeMount } from 'vue'
  import { Delete, Share } from '@element-plus/icons-vue'
  import { getallUsers } from '../../request/user'
  // 小程序注册成员列表
  const userList = ref([])
  // 获取成员列表
  const getUserList = async () => {
    const res = await getallUsers()
    console.log(res.data)
    userList.value = res.data
  }

  // 挂载之前
  onBeforeMount(() => {
    getUserList()
  })
</script>

<style scoped>

</style>