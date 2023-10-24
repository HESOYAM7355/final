
<template>
    <!-- <div class="about">
      <form action="" @submit.prevent="checkUser">
        <input type="text" placeholder="Имя">
        <input type="password" placeholder="Пароль">
        <button class="formButton">login</button>
        <p> {{ message }}</p>
        
      </form>
    </div> -->

      <!-- <div class="about">
    <h1>lets join to DARK</h1>
    <form action="" @submit.prevent="addUser">
      <input type="text" placeholder="Имя">
      <input type="password" placeholder="Пароль">
      <button class="formButton">Create</button>
      <p> {{ message }}</p>
    </form>

    
  </div> -->

  <div class="login-box about">
  <h2>login</h2>
  <form action="" @submit.prevent="checkUser">
    <div class="user-box">
      <input type="text" name="" required="">
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="">
      <label>Password</label>
    </div>
    <p class="message"> {{ message }}</p>

    <button class="formButton" href="#">
      <span></span>
      <span></span>

      <span></span>
      <span></span>
      log in

    </button>
  </form>
</div>
  </template>
  
  <script>
  import {useRouter} from 'vue-router'
  
  export default{
    data(){
    return {
        message: '',
      router: useRouter(),

    }
  },
  methods: {
    checkUser(event){
      const obj={
        name: event.target[0].value,
        password: event.target[1].value
      }

      fetch("http://localhost:4000/checkUser", {
        method: "POST",

        headers: {
          "Accept": 'application/json',
          "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
      })
      .then(res=>{
        if(res.ok){
            console.log(res)
            return res.json()
        } 
        this.message = "Incorrect login or password"
      })
      .then(data=>{
          console.log(data)
        localStorage.name = data.userName,
        localStorage.id = data.userId
        this.$router.push({name: "mainPage"})

      })
      console.log(event.target[0].value)
      console.log(event.target[1].value)

    }
  },
}
  </script>
  
  <style>
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  
  </style>
  