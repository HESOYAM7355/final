<template lang="">
    <div class="mainPage">
        <div><listUsers/></div>

        <div><listPosts :listPosts="listposts"/></div>
        <div><addPost :method="addPost"/></div>
    </div>
</template>
<script>
import listPosts from "../components/listPosts.vue"
import listUsers from "../components/listUsers.vue"
import addPost from "../components/addPost.vue"


export default {
    data() {
        return {
            listPosts: [],
        }
    },
    components: {
        listPosts,
        listUsers,
        addPost
    },
    methods:{
        addPost(event){
            console.log(event.target.value)
            fetch("http://localhost:4000/addPost", {
                method: 'POST',
                headers: {
          "Accept": 'application/json',
          "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
                body: JSON.stringify({
                 userId: localStorage.id,
                text: event.target.value
                }),
                

            })
            .then(res=>res.json())
            .then(data=>this.listPosts = data)
        }
    },
    mounted() {
        fetch('http://localhost:4000/getAllPosts')
        .then(res=>res.json())
        .then(data=>this.listPosts = data)
    }

}
</script>


<style>
    .mainPage{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;

    }
    .mainPage div{
        margin: 0 2vw;
    }
</style>