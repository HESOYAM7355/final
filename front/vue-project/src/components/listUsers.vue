<template>
    <div class="listUser">
        <li v-for="el in listUsers">
            {{ el.userName }}
        </li>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listUsers: [],

        }
    },
    mounted(){
        fetch('http://localhost:4000/getAllUsers')
        .then(res=>res.json())
        .then(data=>this.listUsers=data)
    }
}
</script>
<style>
    .listUser *{
        margin: 20px;
        
    }
    .listUser{
        width: 10vw;
        max-height: 50vh;
        overflow: scroll;
    }
    
</style>