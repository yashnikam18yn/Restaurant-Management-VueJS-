<template>
    <Header/>
    <h3>Update Restuarant Page</h3>
    <div class="add-restaurant">
        <input type="text" v-model="restaurant.name" class="input-field" placeholder="Enter Name">
        <input type="text" v-model="restaurant.contact" class="input-field" placeholder="Enter Contact">
        <textarea class="input-field" v-model="restaurant.address" name="address" cols="30" rows="10" placeholder="Enter Address"></textarea>
        <button @click="update" class="add-button">Update Restaurant</button>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    import Header from "./Header.vue"
    export default{
        name:"UpdatePage",
        
        components:{
          Header
        },
        data(){
        return{
          restaurant:{
            name:'',
            contact:'',
            address:'',
          }
            
        }
    },
    methods:{
      async update(){
        let result = await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
          name:this.restaurant.name,
          contact:this.restaurant.contact,
          address:this.restaurant.address
        });
        console.log(result);
        if(result.status == 200){
          this.$router.push({name:'Home'});
        }
      }
    },
        async mounted(){
          let user = localStorage.getItem("userInfo");
          if(!user){
            this.$router.push({name:'SignUp'})
          }
          console.log(this.$route.params.id);
          let result = await axios.get('http://localhost:3000/resturant/'+this.$route.params.id);
          console.log(result);
          this.restaurant=result.data;

        }
    }
    </script>
    
    <style scoped>
    .add-restaurant {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.input-field {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

textarea.input-field {
    resize: vertical;
}

.add-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.add-button:hover {
    background-color: #45a049;
}
    </style>