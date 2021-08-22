<template>
  <div>
      <h1>商品{{id}}</h1>
  </div>
</template>
<script>
export default{
   computed: {
    id() {
      return Number(this.$route.params.id);
    },
   }
}
</script>