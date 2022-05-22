<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-21 21:38:30
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-22 20:19:28
 * @FilePath: \Bingo-manage\Bingo-management\src\views\examine\questionnaire.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-breadcrumb class="index-top">
    <el-breadcrumb-item :to="{ path: '/dashboard/workspace' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    <el-breadcrumb-item>问卷列表</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { allQuestion } from '../../request/question'

  // 挂载之前将数据赋值
  onBeforeMount(async () => {
    const result = await allQuestion()
    console.log(result)
  })
</script>
