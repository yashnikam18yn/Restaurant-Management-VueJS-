<template>
  <Header />
  <h3>Home Page</h3>
  <table class="restaurant-table">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td><router-link :to="'/update/'+item.id">update</router-link></td>
      <button @click="deleteData(item.id)">Delete</button>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "HomePage",
  data() {
    return {
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  methods:{
    deleteData(id){
      console.log(id);
    }
  },
  async mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/resturant");
    this.restaurant = result.data;
  },
};
</script>

<style scoped>
.restaurant-table {
  width: 100%;
  border-collapse: collapse;
}

.restaurant-table th,
.restaurant-table td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

.restaurant-table th {
  background-color: #f2f2f2;
}
</style>
