
<template>
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
  <h2>register</h2>
  <form action="" @submit.prevent="addUser">
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
      Create

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
    addUser(event){
      const obj={
        name: event.target[0].value,
        password: event.target[1].value
      }

      fetch("http://localhost:4000/addUser", {
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
          return res.json()
        } 
        this.message = "The user is already recruit by darkness"
      })
      .then(data=>{
          console.log(data)
        localStorage.name = data.userName,
        localStorage.id = data.id
        this.$router.push({name: "mainPage"})

      })
      console.log(event.target[0].value)
      console.log(event.target[1].value)

    }
  },
}
</script>

<style>







@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@700&display=swap');

html {
  height: 100vh;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 60px;
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  font-family: 'Josefin Slab', serif;
  padding: 10px 5px;
  font-size: 20px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
    font-family: 'Josefin Sans', sans-serif;
  
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #0d0d0d;
  font-size: 12px;
}

.login-box form button {
  background: none!important;
  border: none;
  color: #fff;
  padding: 20px !important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/

  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  background-color: #1d1d1d;
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box button:hover {
  background: #000;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #000, 0 0 25px #000, 0 0 50px #000,
    0 0 100px #000;
}

.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #000);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}
.message{
  color: #fff;
  margin: auto;
  font-family: 'Josefin Slab', serif;
}
@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #000);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #000);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}










input{
  min-height: 50px;
  border-radius: 10px;

  
}

form{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.formButton{
  
  margin: auto;
}
</style>
