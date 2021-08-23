<template>
  <div>
      <h1>商品{{id}}</h1>
      <ul>
        <li><img :src=url></li>
        <li><v-btn>購入</v-btn></li>
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
    url(){
      return 'https://source.unsplash.com/400x300/?food';
    },
    price(){
      return this.$route.params.price;
    }
   }
}
</script>