<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-17 20:36:06
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-23 11:19:40
 * @FilePath: \Bingo-manage\Bingo-management\src\views\dashboard\workspace\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <p>工作台</p>
  <fast-navigation class="fastNavigation"></fast-navigation>
  <dynamic-toast></dynamic-toast>
</template>

<script setup>
import fastNavigation from './components/fastNavigation.vue'
import dynamicToast from './components/dynamicToast.vue'
</script>

<style scoped>
.fastNavigation{
  width: 30%;
  float: right;
  margin-right: 20px;
}
</style>
