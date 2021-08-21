<template>
 <div id="app">
  <ul v-for="item of items" v-bind:key="item.name">
   <li>{{ item.id }}{{item.title}}値段{{item.price}}</li>
  </ul>
 </div>
</template>

<script>
 export default {
  data: function() {
   return {
    items: [
     { id:1,title:"1",price:500,qty:1 },
  { id:2,title:"2",price:600,qty:1},
  { id:3,title:"3",price:700,qty:1 },
  { id:4,title:"4",price:800,qty:1 },

    ]
   }
  }
 }
</script>