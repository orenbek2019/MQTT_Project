<template>
  <div class="home">
    <!-- <Login></Login> -->
    <Users class="users"></Users>
    <Radio class="radio"></Radio>
  </div>
</template>

<script>
// @ is an alias to /src
import Radio from '@/components/Radio.vue';
import Login from '@/components/Login.vue';
import Users from '@/components/Users.vue';
export default {
  name: 'home',
  components: {
    Radio,
    Login,
    Users,
  },
};
</script>

<style scoped>
.home {
  min-width: 500px;
  height: 90%;
  width: 80%;
  margin: 30px auto;
}
.users{
  display: inline-block;
}
.radio{
  display: inline-block;
}
</style>
