<template>
  <div class="navBar">
    <router-link to="/">Home</router-link>
    <router-link to="/add-new-restaurant">Add Restaurant</router-link>
    <a href="#" v-on:click="logout">Log Out</a>
  </div>
</template>

<script>
  export default ({
    name: 'HeaderBar',

    methods: {
      logout() {
        localStorage.clear();
        this.$router.push({ name: 'LoginPage' })
      }
    },
  });
</script>

<style>
  .navBar {
    background: #494848;
    overflow: hidden;
  }

  .navBar a {
    float: left;
    color: #ffffff;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
  }

  .navBar a:hover {
    background-color: #ddd;
    color: #ab6715;
  }
</style>
