<template>
    <!-- <img class="logo" src="../assets/restaurant-icon-png-plate-1.png" alt="" srcset=""> -->
<h3>Sign Up</h3>

<div class="register">
   <input type="text" v-model="name" placeholder="Enter Name">
   <input type="text" v-model="email" placeholder="Enter Email">
   <input type="text" v-model="password" placeholder="Enter Password">
   <button v-on:click="signUp">Sign Up</button>
</div>


</template>

<script>
 import axios from "axios"
 export default{
    name: 'SignUps',

    data(){
      return{
        name:'',
        email:'',
        password:''
      }
    },
    methods:{
      async signUp(){
        console.log("Function Click."+this.name+" "+this.email+" "+this.password);
        let result = await axios.post("http://localhost:3000/user",{
          name:this.name,
          email:this.email,
          password:this.password
        });
        console.log(result);
        if(result.status == 201){
          alert("Sign up done")
        }
        localStorage.setItem("userInfo",JSON.stringify(result.data))
        this.$router.push({name:'Home'})
      }
    },
    mounted(){
      let user = localStorage.getItem("userInfo");
      if(user){
        this.$router.push({name:'Home'})
      }
    }
 }
</script>

<style scoped>
  .logo {
  margin-bottom: 20px; /* Add some space between logo and form */
}

.logo img {
  max-width: 100px; /* Adjust the size of the logo */
}
    .register {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>