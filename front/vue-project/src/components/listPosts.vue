<template lang="">
    <div class="listPostsContainer">
        <div class="" v-for= "el in listPosts">
            
        <br/>
        <div>{{el.text}} </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props: ['listPosts'],

mounted(){
    const block = document.getElementsByClassName('listPostsContainer')[0]
    setTimeout(()=>{
            block.scrollTop = block.scrollHeight;
        },1000)
    }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');
.listPostsContainer::-webkit-scrollbar-track {
    background: transparent;
}


.listPostsContainer{
    font-size: 25px;
    font-family: 'Old Standard TT', serif;
    color: aliceblue;
    padding: 20px 20%;
    max-height: 85vh;
    background-color: transparent;
    overflow-y: scroll;
    overflow-x: hidden;
}
.listPostsContainer div *{
    background-color: #1d1d1d;
    border-radius: 20px;
    padding: 15px;
}
</style>

