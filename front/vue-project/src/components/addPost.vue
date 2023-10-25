<template lang="">
    <div class="container">
        <input 
        @keyup.enter="$emit('newPost', $event)"
        type="text"
        id="postInput"
        placeholder="What do you think?">

        
    </div>
</template>
<script>
export default {
     props:['newPost'],
  

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap');

    .container{
        min-height: 15vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: transparent;
    }
    #postInput{
        font-family: 'Old Standard TT', serif;

        color: aliceblue;
        border: none;
        outline: none;
        background-color: #1d1d1d;
        font-size: 18px;
        padding: 10px 15px;
        border-radius: 20px;
        min-width: 40vw;
        min-height: 4vw;
        margin: auto;
        overflow: auto;



    }

</style>