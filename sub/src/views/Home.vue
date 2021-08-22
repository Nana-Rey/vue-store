<template>
 <div id="app">

    
   <v-data-table
   :headers="headers"
   :items="items">
  <ul v-for="item of items" v-bind:key="item.id">
    
    <router-link :to="`product/${item.id}/${item.title}`">
    <v-btn color="info">
   
       </v-btn>
   </router-link>
     
<v-spacer></v-spacer>
     
  </ul>
 </v-data-table>
     

 </div>
 
</template>

<script>

 export default {
   
  data: function() {
   return {
     headers:[
       {  value: 'name',

       },
 
           { text: '順番', 
            value: 'id' 
          },
          {
            text: '商品',
            value: 'title',
          },
          { text: '値段', 
            value: 'price' 
          },
          { text: '詳細', 
            value: 'link' 
          },
     ],

    items: [
  { id:1,title:"商品1",price:500,qty:1,link:' '},
  { id:2,title:"商品2",price:600,qty:1,link:'./Shopping2'},
  { id:3,title:"商品3",price:700,qty:1, link:'./Shopping3'},
  { id:4,title:"商品4",price:800,qty:1,link:'./Shopping4'},
],
 
   }

   },
  
   }
  
 
</script>
