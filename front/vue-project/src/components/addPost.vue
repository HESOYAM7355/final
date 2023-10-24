<template lang="">
    <div class="container">
        <input 
        @keyup.enter="$emit('newPost', $event)"
        type="text"
         v-if='showInput' >

        <button @click='showInput = !showInput'>Добавить пост</button>
    </div>
</template>
<script>
export default {
     props:['newPost'],
    data() {
        return {
            showInput: false
        }
    },

}
</script>
<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .container button{
        max-width: 100px;
    }
</style>