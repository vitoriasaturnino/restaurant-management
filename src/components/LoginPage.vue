<template>
  <img class="restaurant-logo" src="../assets/restaurant-logo.png"/>
  <h1>LogIn</h1>

  <div class="login-form">
    <label>E-mail</label>
    <input type="email" v-model="email" placeholder="Enter your e-mail">

    <label>Password</label>
    <input type="password" v-model="password" placeholder="Enter your password">

    <button v-on:click="login" >Login</button>

    <p>
      <router-link to="/sing-up" >Sing Up</router-link>
    </p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default ({
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: ""
      }
    },

    methods: {
      async login() {
        let result = await axios.get(
          `http://localhost:3000/users?${this.email}=email$password=${this.password}`
        );

        console.warn(result);

        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "Home"});
        }
      }
    },

    mounted() {
      let user = localStorage.getItem("user-info");

      if (user) {
        this.$router.push({ name: 'Home' });
      }
    }
  });
</script>

<style>
  h1 {
    color: #494848;
  }

  .restaurant-logo {
    width: 410px;
    height: 230px;
  }

  .login-form label {
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    width: 300px;
    text-align: left;
  }

  .login-form input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #494848;
  }

  .login-form button {
    width: 300px;
    height: 40px;
    background-color: #494848;
    color: #ffffff;
    border: none;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
</style>