<template>
 <div id="app">

    
   <v-data-table
      :headers="headers"
      :items="items"
     >
     <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        midiam
        class="mr-2"
        @click="addItemToBasket(item)"
      >
        mdi-food-apple
      </v-icon>
      
    </template>
 
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
        value: 'productname'
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
      { id:1,productname:'Product１',price:500,qty:1,link:''},
      { id:2,productname:'product2',price:600,qty:1,link:''},
      { id:3,productname:'product3',price:700,qty:1, link:''},
      { id:4,productname:4,price:"800",qty:1,link:''},
    ],

    addItemToBasket(item)
    {
      this.$router.push({path: `/product/${item.id}/${item.productname}/${item.price}/`});

    }
   }

   },
 }