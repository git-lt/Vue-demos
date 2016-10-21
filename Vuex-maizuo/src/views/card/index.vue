<template lang="html">
  <div class="card-query">
    <div class="card-tab-menu">
      <div class="tab-item" @click="curTab='MATERIAL'"  :class="{'active': curTab=='MATERIAL'}">
        卖座卡
      </div>
      <div class="tab-item" @click="curTab='EXCHANEGE'" :class="{'active': curTab=='EXCHANEGE'}">
        电子卖座卡
      </div>
    </div>
    <div class="card-material" v-if="curTab=='MATERIAL'">
      <form>
        <div class="form-group">
          <input type="text" name="username" class="form-control" placeholder="请输入手机/邮箱">
          <div class="input-bg"></div>
        </div>
        <div class="form-group">
          <input type="text" name="password" class="form-control" placeholder="请输入密码">
          <div class="input-bg"></div>
        </div>
        <button type="submit" class="submit">登录</button>
      </form>
    </div>
    <div class="card-exchanege" v-if="curTab=='EXCHANEGE'">
      <form>
        <div class="form-group">
          <input type="text" name="username" class="form-control" placeholder="请输入卡号">
          <div class="input-bg"></div>
        </div>
        <button type="submit" class="submit">查询</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      curTab:'MATERIAL'
    }
  }
}
</script>

<style lang="css">
.card-query{
  font-size: 14px;
  position: absolute;
  min-height: 100%;
  width: 100%;
  background-color: #fcfcfc;
}
.card-tab-menu {
  height: 45px;
  line-height: 45px;
  box-shadow: 0 -1px #ff7100 inset;
  background: #fff;
  display: flex;
}
.tab-item{
  font-size: 16px;
  flex:1;
  text-align: center;
}
.tab-item.active {
  color:#ff7100;
  box-shadow: 0 -4px #ff7100 inset;
  transition:all .2s ease
}
form {
  padding: 0px 31px 0px 31px;
}
.form-group {
  margin: 30px 0 0;
  height: 34px;
  position: relative;
}
.form-control {
  border: none;
  background-color: #fcfcfc;
  border-radius: 0px;
  box-shadow: none;
  outline: none;
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}
.input-bg {
  position: absolute;
  top: 20px;
  height: 12px;
  width: 100%;
  border: solid #c4c4c4;
  border-width: 0 1px 1px 1px;
}
.submit {
  width: 163px;
  background-color: #fe8233;
  color: #fff;
  border: none;
  border-radius: 36px;
  margin-top: 45px;
  padding: 8px 12px;
  font-size: 15px;
  outline: none;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>
