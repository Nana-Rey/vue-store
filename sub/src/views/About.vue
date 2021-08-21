<template>
 <div class="cart">
   <table class="table table-cart"><li>{{items}}</li></table>
   <tr v-for="(item, index) in cartItems" v-bind:key="index">
              <td>{{item.title}}</td>
              <td>{{item.qty}}点</td>
    </tr>
 </div>
</template>

<script>

</script>