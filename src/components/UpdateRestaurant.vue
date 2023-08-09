<template>
  <HeaderBar />
  <h1>Hello {{ name }}, Welcome on Update Restaurant Page!</h1>
</template>

<script>
  import HeaderBar from "./HeaderBar.vue";

  export default ({
    name: "UpdateRestaurant",

    components: {
      HeaderBar
    },

    data() {
      return {
        name: ''
      }
    },

    mounted() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;

      if (!user) {
        this.$router.push({ name: 'SingUp' });
      }
    }
  });
</script>
