<script setup>
</script>

<template>
  <main>
    <h1>Welcome to the DARK</h1>
    <nav>
        <RouterLink class="btn" to="/register">register</RouterLink>
        <RouterLink class="btn" to="/login">login</RouterLink>
      </nav>
  </main>
  
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1{
  background: #959595;
background: linear-gradient(to bottom, #4a4a4a 0%, #0D0D0D 36%, #010101 50%, #000 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  margin-top: -200px;
  font-size: 60px;
  font-family: 'Josefin Sans', sans-serif;
    margin-bottom: 30px;
}
nav{
  display: inline-flex;
  gap: 300px;
}


.btn {
  font-family: 'Josefin Sans';
  font-size: 3em;
  border-radius: 20px;
  font-weight: 700;
  color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    background: linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);

    margin: 20px;
    background-size: 300% 100%;

    /* border-radius: 50px; */
    transition: all .4s ease-in-out;
}

.btn:hover {
    background-position: 100% 0;
    color:  #000;

    transition: all .4s ease-in-out;
}


</style>
