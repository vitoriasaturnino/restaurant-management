<template>
  <HeaderBar />
  <h1>Hello {{ name }}, Welcome on Home Page!</h1>

  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td> {{ item.id }}</td>
      <td> {{ item.name }}</td>
      <td> {{ item.contact }}</td>
      <td> {{ item.address }}</td>
      <td> <router-link :to="'/update-restaurant/' + item.id" > Update </router-link> </td>
    </tr>
  </table>
</template>

<script>
  import axios from "axios";

  import HeaderBar from "./HeaderBar.vue";

  export default ({
    name: "HomePage",

    components: {
      HeaderBar
    },

    data() {
      return {
        name: '',
        restaurant: []
      }
    },

    async mounted() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;

      if (!user) {
        this.$router.push({ name: 'SingUp' });
      }

      let result = await axios.get('http://localhost:3000/restaurants');
      console.warn(result);

      this.restaurant = result.data;
    }
  });
</script>

<style>
  td {
    width: 160px;
    height: 40px;
  }
</style>
