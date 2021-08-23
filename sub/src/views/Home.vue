<template>
 <div id="app">

    
   <v-data-table
      :headers="headers"
      :items="items"
     >
     <template v-slot:item.actions="{ item }">
      <v-icon
        midiam
        class="mr-2"
        @click="addItemToBasket(item)"
      >
        mdi-food-apple
      </v-icon>
      
    </template>
  <!-- <ul v-for="item of items" v-bind:key="item.id">
    
    <a href="`product/${item.id}/${item.title}`">${item.title}</a>
   <router-link :to="`product/${item.id}/${item.title}`">
{{item.id}}
   </router-link>
    
     
     
  </ul> -->
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

      { text: 'アクション', 
        value: 'actions', 
        sortable: false 
      },
     ],

    items: [
      { id:1,title:"商品1",price:500,qty:1,link:''},
      { id:2,title:"商品2",price:600,qty:1,link:''},
      { id:3,title:"商品3",price:700,qty:1, link:''},
      { id:4,title:"商品4",price:800,qty:1,link:''},
    ],
    addItemToBasket(item)
    {
      console.log(item.title);
      this.$router.push({ path: `/product/${item.id}/${item.title}` })
    }
   }

   },
   

    }
   
  
 
</script>
