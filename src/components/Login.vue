<template>
   <div class="login-container">
     <h3>Login Page</h3>
    
       <div class="form-group">
         <label for="email">Email:</label>
         <input type="email" v-model="email" id="email" name="email" placeholder="Enter your email" required>
       </div>
       <div class="form-group">
         <label for="password">Password:</label>
         <input type="password" v-model="password" id="password" name="password" placeholder="Enter your password" required>
       </div>
       <button @click="login">Login</button> <!-- Corrected syntax -->
     
   </div>
 </template>
 
 <script>
import axios from 'axios';

 export default {
   name: 'LoginPage',
   data(){
      return{
         email:'',
         password:''
      }
   },
   methods:{
      async login(){
         console.log("Email-"+this.email+" Password: "+this.password); // Corrected console log message
         
         let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
         if(result.status == 200 && result.data.length>0){
          alert("Login Sucess")
        }
        localStorage.setItem("userInfo",JSON.stringify(result.data[0]))
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
 .login-container {
   max-width: 400px;
   margin: 0 auto;
   padding: 20px;
   border: 1px solid #ccc;
   border-radius: 5px;
   background-color: #f9f9f9;
 }
 
 .form-group {
   margin-bottom: 20px;
 }
 
 label {
   display: block;
   margin-bottom: 5px;
   color: #333;
 }
 
 input[type="email"],
 input[type="password"] {
   width: 100%;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 5px;
   font-size: 16px;
 }
 
 button {
   padding: 10px 20px;
   border: none;
   border-radius: 5px;
   background-color: #007bff;
   color: #fff;
   font-size: 16px;
   cursor: pointer;
 }
 
 button:hover {
   background-color: #0056b3;
 }
 
 button:focus {
   outline: none;
 }
 </style>
