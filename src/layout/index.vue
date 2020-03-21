<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <Breadcrumb></Breadcrumb>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";

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
    Sidebar, 
    Breadcrumb
  },
};
</script>

<style scoped lang="scss">

</style>
