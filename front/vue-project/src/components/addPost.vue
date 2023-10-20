<template lang="">
    <div class="container">
        <button @click="showInput =  !showInput">Добавить пост</button>
        <input type="text" v-if='showInput' @keyup.enter="$emit('addPost')">
    </div>
</template>
<script>
export default {
     props:['addPost'],
    data() {
        return {
            showInput: false
        }
    },
    methods: {
    
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