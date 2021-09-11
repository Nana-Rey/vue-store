<template>
  <div>
      <h1>ご注文内容の確認</h1>
      <ul>
      <li v-for="item in cartdata" :key="item.item_2">
         <div>{{ item.productname }}</div>
            <div>{{ item.price }}</div>
            <div>{{ item.id }}</div>
            <div>{{ item.qty }}</div>
         <span>小計{{ item.price * item.qty }}円</span>
      </li> 
   </ul>
   <h3>合計{{total}}円</h3>
      <router-link to ="/cart"><v-btn>カートに戻る</v-btn></router-link>
      <router-link to ="/checkout"><v-btn>お支払いへ</v-btn></router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
import  {db} from '../firebase';
import "firebase/auth";

export default {
  data(){
        return{
         cartdata:[],
         
        }
     },
 created(){
       const currentUser = firebase.auth().currentUser;
       db.collection('cart')
         .where('user_id','==',currentUser.uid)
         .get()
         .then(snapshot =>{
           snapshot.forEach(doc=>{ 
              //console.log(doc.id, "=>",doc.data());
              this.cartdata.push(doc.data())
              
           },
        )})
        console.log(this.cartdata)},
}
</script>

<style>

</style>