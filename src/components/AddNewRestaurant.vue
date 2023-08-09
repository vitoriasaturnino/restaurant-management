<template>
  <HeaderBar />
  <h1>Hello {{ name }}, Welcome on Add New Restaurant Page!</h1>

  <form class="add-new-restaurant-form">
    <label>Name</label>
    <input type="text" v-model="restaurant.name" placeholder="Enter Restaurant Name" />

    <label>Contact</label>
    <input type="text" v-model="restaurant.contact" placeholder="Enter Restaurant Contact" />

    <label>Address</label>
    <input type="text" v-model="restaurant.address" placeholder="Enter Restaurant Address" />

    <button v-on:click="addNewRestaurant" >Save</button>
  </form>
</template>

<script>
  import axios from 'axios';

  import HeaderBar from "./HeaderBar.vue";

  export default ({
    name: "AddNewRestaurant",

    components: {
      HeaderBar
    },

    data() {
      return {
        name: '',
        restaurant: {
          name: '',
          contact: '',
          address: ''
        }
      }
    },

    methods: {
      async addNewRestaurant() {
        console.warn(this.restaurant);
        const result = await axios.post("http://localhost:3000/restaurants", {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          address: this.restaurant.address
        });

        console.warn("result", result);
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
