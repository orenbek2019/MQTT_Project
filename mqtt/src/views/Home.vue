<template>
  <div class="home">
    <Radio></Radio>
  </div>
</template>

<script>
// @ is an alias to /src
import Radio from '@/components/Radio.vue';

export default {
  name: 'home',
  components: {
    Radio,
  },
};
</script>

<style>
.home{
  min-width: 500px;
  width: 80%;
  margin: 30px  auto;
}
</style>

