<template>
  <div class="container">
    <div v-for="i in 10" v-bind:key="i">
      <div class="user">
        <div class="avatar">
          <img src="@/img/user.png" />
        </div>
        <div class="name"></div>
        <span>{{i}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {},
  computed: {},
  methods: {}
};
</script>

<style>
.container {
  background-color: #dbdbdb;
  min-width: 30px;
  overflow: scroll;
}
.container {
  background: #2e3238;
  width: 280px;
  height: 100%;
}
.user {
  overflow: hidden;
  width: 280px;
  padding: 12px 18px 11px;
  border-bottom: 1px solid #292c33;
  cursor: pointer;
}
.avatar {
  float: left;
  margin-right: 10px;
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
}
</style>
