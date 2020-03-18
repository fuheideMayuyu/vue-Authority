<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'

export default {
  data() {
    return {

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

  },
  components: {
    sidebar
  },
};
</script>

<style scoped lang="scss">

</style>
