<template>
  <div class="home">
    <h1>Home Page</h1>
    <!-- <button v-permission="['admin', 'editor']">editor button</button>
    <button v-permission="['admin']">admin button</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
