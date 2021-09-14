<template>
<div>
  <div v-for="item in product" :key="item.id">

      <h1>{{item.name}}</h1>
      <ul>
        <li>{{item.src}}</li>
        <li> {{item.img}}円 </li>
        
        <li>個数:<input type="number"  v-model.number="quantity" min="1" max="10" value="1" />個</li>
          <router-link to="/cart">
          <v-btn  @click="addToCart">カートへ追加</v-btn></router-link>
      </ul>
  </div>
  </div>
</template>
<script>
import firebase from 'firebase';
import  {db} from '../firebase';
import "firebase/auth";
export default {
  data(){
    return{
      db: null,
        quantity: '',
        product:[]
    }
  },
  cretated(){
     firebase.auth().onAuthStateChanged(user=>{
       this.user =user ? user :{}
     })},
  methods:{
    getProducts: function(){
            db.collection('products')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    var product = doc.data();
                    console.log(product)
                    this.products.push({
                        name: product.productname,
                        price: product.price,
                        img: product.src,
                    })
                })
            })
    }
  }
}
</script>
