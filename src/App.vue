<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    margin: 0;
    padding: 0;
  };

  .add-new-restaurant-form label {
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    width: 500px;
    text-align: left;
  }

  .add-new-restaurant-form input{
    width: 500px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #494848;
  }

  .add-new-restaurant-form button {
    width: 500px;
    height: 40px;
    background-color: #494848;
    color: #ffffff;
    border: none;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
</style>
