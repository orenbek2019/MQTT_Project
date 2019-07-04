<template>
  <div class="home">
    <!-- <Radio></Radio> -->
    <!-- <Login></Login> -->
    <Users></Users >
  </div>
</template>

<script>
// @ is an alias to /src
import Radio from "@/components/Radio.vue";
import Login from "@/components/Login.vue";
import Users from "@/components/Users.vue";
export default {
  name: "home",
  components: {
    Radio,
    Login,
    Users,
  },
};
</script>

<style>
.home {
  min-width: 500px;
  width: 80%;
  margin: 30px auto;
}
</style>
