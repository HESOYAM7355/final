<template>
    <div class="listUsers">
            
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
        .then(data=>this.listUsers=data);



        const block = document.getElementById("listUsers");
    
        setTimeout(()=>{
            block.scrollTop = block.scrollHeight;
        },1000)
        // Не спрашивайте, сколько часов я потратил, чтобы использовать обычный таймаут...
        //   onload и прослушиватель события load не работали, пришлось костылить, а вообще без задержки элемент не успевал прогрузится.
        // В целом это ужасное решение, поправлю в следующем патче..когда-нибудь..
        
    }

}





// window.addEventListener('load',()=>{
//     var block = document.getElementById("listUsers");
//   block.scrollTop = block.scrollHeight;
//   console.log(21)
// })
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@700&display=swap');
.listUsers::-webkit-scrollbar{
    /* background-color: #fff;
    width: 10px;
    scrollbar-width: thin;  
 */
 width: 24px;  

    
}/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #1d1d1d;
  }

  *::-webkit-scrollbar-thumb {
    margin: 10px;
    background-color: gray;
    border-radius: 40px;
    border: 8px solid #1d1d1d;
  }


.listUsers *{
        margin: 20px 0;
        
    }
    .listUsers{
        font-family: 'Old Standard TT', serif;
        list-style-type: none;
        max-height: 100vh;
        background-color: #1d1d1d;
        color: aliceblue;
        overflow-x: visible;
        /* max-height: 100vh; */
        padding: 30px;
        grid-area: listUsers;
        /* min-width: 30vw; */
        font-size: 18px;
        overflow-y: scroll;
    }
    
</style>