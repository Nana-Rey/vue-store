<template>
 <div id="app">
   <table border="1">
  <ul v-for="item of items" v-bind:key="item.name">

   <tr>
     <th>{{ item.id }}</th>
   <th>{{item.title}}</th>
   <th>値段{{item.price}}

       <router-link to="{detail.id}">詳細</router-link>
     
     </th>
     </tr>
  </ul>
 </table>
 </div>
</template>

<script>

 export default {
   
  data: function() {
   return {
     cartItems: [], 
    items: [
  { id:1,title:"商品1",price:500,qty:1 },
  { id:2,title:"商品2",price:600,qty:1},
  { id:3,title:"商品3",price:700,qty:1 },
  { id:4,title:"商品4",price:800,qty:1 },
],
 
   }

   },
   methods: {
        onClick: function() {
          this.items.push({
          
          });
          
        }
    }
  
   }
  
 
</script>