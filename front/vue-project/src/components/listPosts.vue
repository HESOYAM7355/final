<template lang="">
    <div class="listPostsContainer">
        <div class="" v-for= "el in listPosts">
            <div>{{el.name}}</div>
            
        <br/>
        <div>{{el.text}} </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props: ['listPosts'],
    
     
}
</script>
<style>
.listPostsContainer{
    max-height: 100vh;
    background-color: #ffffff;
    overflow-y: scroll;
}
    
</style>