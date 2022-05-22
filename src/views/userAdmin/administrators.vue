<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-17 21:17:55
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-22 17:20:28
 * @FilePath: \Bingo-manage\Bingo-management\src\views\userAdmin\administrators.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="index-top">
    <el-breadcrumb-item :to="{ path: '/dashboard/workspace' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
  </el-breadcrumb>
  <el-button class="addbutton" type="primary">添加管理员</el-button>
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
  <!-- 添加管理员 -->
  <el-dialog>

  </el-dialog>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue'
  import { Delete } from '@element-plus/icons-vue'
  // 管理员列表
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
.addbutton{
  float: left;
  margin: 20px;
}
</style>
