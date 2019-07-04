<template>
  <div class="container">
    <div class="fixed">
      <div class="header">
        <img src="@/img/my_avatar.jpg" />
        <span>Go_st</span>
      </div>
      <div class="tab">
        <div class="tab-item">
          <img src="@/img/wx_sel.png" alt="聊天" />
        </div>
        <div class="tab-item">
          <img src="@/img/radio_off.png" alt="电台" />
        </div>
      </div>
    </div>
    <div class="user-list">
      <div class="user" v-for="i in 30" v-bind:key="i">
        <div class="avatar">
          <img src="@/img/user.png" />
        </div>
        <span class="name">你的名字</span>
        <span class="detail">{{i}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.container {
  background: #2e3238;
  width: 280px;
  height: 100%;
  overflow: hidden;
  position: relative;
  /* overflow为scroll必须得给定相应方向上的尺度 */
}
.fixed {
  position: relative;
  height: 116px;
  width: 100%;
}
.header {
  border-bottom: 1px solid #24272c;
  height: 70px;
  position: relative;
}
.header img {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 30px;
  top: 15px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
.header span {
  position: absolute;
  left: 80px;
  font-weight: 400;
  width: 156px;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: #fff;
  font-size: 18px;
  line-height: 70px;
  text-decoration: none;
}
.tab {
  overflow: hidden;
  width: 100%;
  /* position: relative; */
  padding-bottom: 4px;
  border-bottom: 1px solid #24272c;
  cursor: pointer;
}

.tab-item {
  display: inline-block;
  height: 40px;
  width: 50%;
  text-align: center;
  position: relative;
}
.tab-item::after {
  content: "";
  position: absolute;
  top: 8px;
  right: 0;
  width: 0;
  height: 28px;
  border-right: 1px solid #24272c;
}

.tab-item img {
  margin-top: 8px;
  width: 26px;
  height: 26px;
}
.user-list{
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100% - 116px);
}
.user {
  overflow: hidden;
  width: 244px;
  padding: 12px 18px 12px;
  border-bottom: 1px solid #292c33;
  cursor: pointer;
}
.avatar {
  float: left;
  margin-right: 15px;
  position: relative;
}
.avatar img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}
.name {
  font-weight: 400;
  font-size: 13px;
  color: #fff;
  line-height: 20px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  text-align: left;
  max-width: 200px;
  margin-top: 4px;
}
.detail {
  display: block;
  color: #989898;
  font-size: 13px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  height: 1.5em;
}

/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/

::-webkit-scrollbar {
  width: 6px; /*对垂直流动条有效*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #292c33;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

::-webkit-scrollbar-track:hover {
  background-color: #989898;
}

/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 7px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #6b6f7c;
}
</style>
