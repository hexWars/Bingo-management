<!--
 * @Author: xjc 2324881835@qq.com
 * @Date: 2022-05-16 18:52:08
 * @LastEditors: xjc 2324881835@qq.com
 * @LastEditTime: 2022-05-16 19:46:34
 * @FilePath: \Bingo-manage\bingo-manage\src\views\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域-->
      <div class="avater_box">
        <img src="../assets/images/loginimg.jpg">
      </div>
      <!-- 登录表单区域-->
      <el-form
        ref="form"
        label-width="0px"
        class="login_form">
          <!-- username-->
          <el-form-item prop="username">
            <el-input  prefix-icon="Avatar"></el-input>
          </el-form-item>
          <!-- password-->
          <el-form-item prop="password">
            <el-input  prefix-icon="Lock" type="password"></el-input>
          </el-form-item>
          <!--按钮-->
          <el-form-item class="btns">
            <el-button type="primary" @click="toHome">登录</el-button>
            <el-button type="info" >重置</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  // 创建router实例
  const router = useRouter()
  // 点击前往主页
  function toHome() {
    router.push('/home')
  }
</script>


<style scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.avater_box{
  height: 130px;
  width: 130px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #eee;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
}
.avater_box>img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}

.login_form{
  position: absolute;
  bottom:0;
  width: 100%;
  padding:0 20px ;
  box-sizing: border-box;
}
.btns{
  position: relative;
  left: 63%;
}
</style>