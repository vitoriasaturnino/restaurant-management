<template>
  <HeaderBar />
  <h1>Hello User, Welcome on Home Page!</h1>
</template>

<script>
  import HeaderBar from "./HeaderBar.vue";

  export default ({
    name: "HomePage",

    components: {
      HeaderBar
    },

    mounted() {
      let user = localStorage.getItem("user-info");

      if (!user) {
        this.$router.push({ name: 'SingUp' });
      }
    }
  });
</script>
