<template lang="">
    <div>
        <div v-for= "el in listPosts">
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
<style lang="">
    
</style>