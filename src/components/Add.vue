<template>
    <Header/>
    <h3>Add Restaurant Page</h3>
    <div class="add-restaurant">
        <input type="text" v-model="name" class="input-field" placeholder="Enter Name">
        <input type="text" v-model="contact" class="input-field" placeholder="Enter Contact">
        <textarea class="input-field" v-model="address" name="address" cols="30" rows="10" placeholder="Enter Address"></textarea>
        <button @click="add" class="add-button">Add Restaurant</button>
    </div>
</template>

<script>
import axios from "axios"
import Header from "./Header.vue"
export default {
    name: "AddPage",
    data(){
        return{
            name:'',
            contact:'',
            address:'',
        }
    },
    components: {
        Header
    },
    methods:{
        async add(){
            //console.log("Add btn click");
            let result = await axios.post("http://localhost:3000/resturant",{
          name:this.name,
          contact:this.contact,
          address:this.address
        });
        console.log(result);
        if(result.status == 201){
          alert("Added Sucessfully!!!")
        }
        }
    },
    mounted() {
        let user = localStorage.getItem("userInfo");
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>

<style>
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
