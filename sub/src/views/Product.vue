<template>
  <div>
      <h1>{{productname}}{{id}}</h1>
      <ul>

        <li><img :src=url></li>
        <li> {{price}}円 <router-link to="/cart"><v-btn @click="addToCart">カートへ追加</v-btn></router-link></li>
      </ul>
  </div>
</template>
<script>
import  {db} from '../firebase';


export default{
   computed: {

    id() {
      return Number(this.$route.params.id);
    },
    productname() {
      return String(this.$route.params.productname);
    },
    price(){
      return String(this.$route.params.price);
    },
    url(){
      return 'https://source.unsplash.com/400x300/?food';
    }
   
    },
    data(){
      return{
        db: null,
        cartRef: null,
      }
    },
   cretated(){
    //  db =firebase.firestore()
    //  this.cartRef =db.collection('cart')
    //  this.cartRef.onSnapshot(
    //    querySnapshot =>{
    //      const obj ={}
    //      querySnapshot.forEach(doc =>{
    //        obj[doc.id] = doc.data()
    //      })
    //      this.carts = obj
    //    }
    //  )
     },
     methods:{
       addToCart (){
         console.log(this.$route.params.productname)
         db.collection('cart').add({
           id: this.$route.params.id,
           productname: this.$route.params.productname,
           price: this.$route.params.price,

         }
         )
       }
     }
}

</script>