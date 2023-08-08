<template>
  <img class="restaurant-logo" src="../assets/restaurant-logo.png"/>
  <h1>Sing Up</h1>

  <div class="register-form">
    <label for="email">Name</label>
    <input type="text" v-model="name" placeholder="Enter your name">

    <label for="email">E-mail</label>
    <input type="email" v-model="email" placeholder="Enter your e-mail">

    <label for="email">Password</label>
    <input type="password" v-model="password" placeholder="Enter you password">

    <button v-on:click="singUp" >Sing Up</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default ({
    name: 'SingUp',
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods:{
      async singUp() {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password
        });

        console.warn(result);

        if (result.status == 201) {
          alert('sing-up done!');
          localStorage.setItem("user-info", JSON.stringify(result.data));
        }
      }
    }
  })
</script>

<style>
  h1 {
    color: #494848;
  }

  .restaurant-logo {
    width: 410px;
    height: 230px;
  }

  .register-form label {
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    width: 300px;
    text-align: left;
  }

  .register-form input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #494848;
  }

  .register-form button {
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
