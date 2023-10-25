                    <template lang="">
    <div class="mainPage">

            <listUsers  id="listUsers"/>



            <listPosts :listPosts='listPosts' id="listPosts"/>


            <addPost v-on:newPost='addPost' id="addPost"/>
 
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
        addPost,
        
    },
    methods:{
        addPost(event){
            console.log(event.target.value)
 

            fetch("http://localhost:4000/addPost", {
                
                method: 'POST',
                headers: {
            
          "Accept": "application/json",
          "Content-Type": "application/json"
        
      },
                body: JSON.stringify({
                userId: localStorage.id,
                text: event.target.value
                })
                

            })
            .then(res=>res.json())
            .then(data=>this.listPosts = data);
            document.getElementById("postInput").value = "";

            
        }
    },
        mounted() {
            
        return fetch('http://localhost:4000/getAllPosts')
        .then(res=>{ return res.json()})
        .then(data=>{ return this.listPosts = data} );
        
    }
    

}

</script>


<style>

body{
    overflow: hidden;
    background-image: url(../../public/backgroundMainPage.jpg);
    background-size: cover;
}
.mainPage{
    background: transparent;

}
    .mainPage{
        display: grid;
        grid-template-columns: 25vw 75vw;


  grid-template-areas: "listUsers listPosts"
                       "listUsers addPost";

    }

    #listUsers{
        overflow-x: hidden;
        grid-area: listUsers;
    }
    #listPosts{
        grid-area: listPosts;
        /* max-width: 60vw;
        max-height: 50vh; */


    }


    #addPost{
        grid-area: addPost;

    }


</style>