<template>
  <h1>Hello User, Welcome on Home Page!</h1>
</template>

<script>
  export default ({
    name: "HomePage",
    mounted() {
      let user = localStorage.getItem("user-info");

      if (!user) {
        this.$router.push({ name: 'SingUp' });
      }
    }
  });
</script>
