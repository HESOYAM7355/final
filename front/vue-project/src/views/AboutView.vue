
<template>
  <div class="about">
    <form action="" @submit.prevent="addUser">
      <input type="text" placeholder="Имя">
      <input type="password" placeholder="Пароль">
      <button class="formButton">Create</button>
      <p> {{ message }}</p>
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
        this.message = "Пользователь уже создан"
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

form{
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 3em;
}

.formButton{
  max-width: 100px;
  margin: auto;
}
</style>
