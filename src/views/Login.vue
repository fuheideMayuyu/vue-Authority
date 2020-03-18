<template>
  <div>
    <h2>用户登录</h2>
    <div>
      <input type="text" v-model="username"/>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin'
    };
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    login() {
      // 派发一个登陆action
      this.$store
        .dispatch('user/login', {username: this.username})
        .then(() => {
          this.$router.push({
            path: this.$router.query.redirect || '/'
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: {

  },
};
</script>

<style scoped lang="scss">

</style>
