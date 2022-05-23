<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-21 21:38:30
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-23 14:22:36
 * @FilePath: \Bingo-manage\Bingo-management\src\views\examine\questionnaire.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-breadcrumb class="index-top">
    <el-breadcrumb-item :to="{ path: '/dashboard/workspace' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    <el-breadcrumb-item>问卷列表</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="table-context">
    <el-table
      style="width: 100%"
      stripe
      :data="questionList">
      <el-table-column label="问卷id" prop="id"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="发起人" prop="openid"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" :icon="Share" circle></el-button>
          <el-button type="danger" :icon="Delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { allQuestion } from '../../request/question'
import { Delete, Share } from '@element-plus/icons-vue'

  // 问卷列表
  const questionList = ref([])

  // 获取问卷列表
  const getQuesList = async () => {
    const result = await allQuestion()
    questionList.value = result.data
    console.log(result)
  }

  // 挂载之前将数据赋值
  onBeforeMount(() => {
    getQuesList()
  })
</script>
