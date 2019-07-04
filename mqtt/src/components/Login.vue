<template>
  <div class="container">
    <div class="log-title">{{regOrLog}}</div>
    <tr class="ap">
      <td class="sub">用户名：</td>
      <td class="textarea">
        <span>
          <input type="text" />
        </span>
      </td>
    </tr>
    <tr class="ap">
      <td class="sub">密码：</td>
      <td style="padding-left: 14px;" class="textarea">
        <span>
          <input type="text" />
        </span>
      </td>
    </tr>
    <div class="buttom">
    <span class="reg">注册</span> <button class="log">{{regOrLog}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {return {regOrLog: '登录'};},
  computed: {},
  methods: {}
};
</script>

<style>
.container {
  background-color: #f3eded;
  min-width: 30px;
  overflow: hidden;
  border-radius: 4px;
   -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
  width: 400px;
  height: 220px;
  box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.12);
}
.log-title{
font-size: 22px;
color: #666;
margin: 20px auto;
}
.ap{
  display: block;
  margin-bottom: 10px;
  margin-left: 80px;
}
.sub{
  font-size: 14px;
  color: #666;
}
.textarea{
  border-collapse: collapse;
}
.textarea input{
  width: 150px;
}
.reg{
  color: blue;
  font-size: 12px;
  padding-right: 15px;
}
.log{
  background-color: blue;
  color: white;
  font-size: 14px;
  border-radius: 6px;
   -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
  margin-left: 30px;
}
.buttom{
  margin-top: 25px;
}
</style>
