<template>
  <div>
      <h1>商品{{id}}</h1>
      <ul>

        <li><img :src=url></li>
        <li> {{price}}円 <router-link to="/cart"><v-btn id="myButton">カートへ追加</v-btn></router-link></li>
      </ul>
  </div>
</template>
<script>
export default{
   computed: {
    id() {
      return Number(this.$route.params.id);
    },
    title() {
      return this.$route.params.title;
    },
    price(){
      return String(this.$route.params.price);
    },
    url(){
      return 'https://source.unsplash.com/400x300/?food';
    },
    
   }
}
</script>