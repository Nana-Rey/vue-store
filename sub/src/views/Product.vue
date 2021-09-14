<template>

  <div>
      <h1>{{product.id}}</h1>
      <ul>

        <li><img :src=product.img></li>
        <li> {{product.price}}円 </li>
        
        <li>個数:<input type="number"  v-model.number="quantity" min="1" max="10" value="1" />個</li>
          <router-link to="/cart">
          <v-btn  @click="addToCart">カートへ追加</v-btn></router-link>
      </ul>
  </div>
</template>
<script>
import firebase from 'firebase'
import  {db} from '../firebase'
//import "firebase/auth"

export default{
   computed: {

      // id() {
      //   return Number(this.$route.params.id);
      // },
   
    },
    data(){
      return{
        db: null,
        cartRef: null,
        quantity: '',
        product: null,
        
      }
    },
   cretated(){
     firebase.auth().onAuthStateChanged(user=>{
       this.user =user ? user :{}
     })
     //console.log(this.$route.params.id)
     this.getProduct(this.$route.params.id);
    },
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
   

     
     methods:{
       getProduct: function(id){
            var doc = db.collection('products').doc(id)
            this.product = {
              id  : id,
              name : doc.name,
              price : doc.price,
              img : doc.src
            }
            
        } ,
      
       
       addToCart (){
        const currentUser = firebase.auth().currentUser;
        this.uid = currentUser.uid;
        console.log({})
         db.collection('cart').add({
           id: this.$route.params.id,
           productname: this.$route.params.productname,
           price: this.$route.params.price,
           user_id: currentUser.uid,
           qty: this.quantity,
         }
         )}
     }
}
     
     
      



</script>