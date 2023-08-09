<template>
  <HeaderBar />
  <h1>Hello {{ name }}, Welcome on Update Restaurant Page!</h1>

  <form class="update-restaurant-form">
    <label>Name</label>
    <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Restaurant Name" />

    <label>Contact</label>
    <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Restaurant Contact" />

    <label>Address</label>
    <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Restaurant Address" />

    <button v-on:click="updateRestaurant" >Update</button>
  </form>
</template>

<script>
  import axios from "axios";
  import HeaderBar from "./HeaderBar.vue";

  export default ({
    name: "UpdateRestaurant",

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
      async updateRestaurant() {
        console.warn(this.restaurant);

        const result = await axios.put("http://localhost:3000/restaurants/" + this.$route.params.id, {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          address: this.restaurant.address
        });

        if(result.status == 200) {
          this.$router.push({ name: 'Home' });
        }
      }
    },

    async mounted() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;

      if (!user) {
        this.$router.push({ name: 'SingUp' });
      }

      const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
      console.warn(result.data);
      this.restaurant = result.data;
    }
  });
</script>
