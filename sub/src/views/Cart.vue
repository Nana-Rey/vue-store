<template>
<div >
   <h1>カート</h1>
   <ul>
      <li v-for="item in cartdata" :key="item.item_1">
         <div>{{ item.productname }}</div>
            <div>{{ item.price }}</div>
            <div>{{ item.id }}</div>
            <div>{{ item.qty }}</div>
       
         <v-btn type="submit" @click="deleteproduct(item.id)">削除</v-btn>
         <span>小計{{ item.price * item.qty }}円</span>
      </li> 
   </ul>
      <router-link to="/"><v-btn>注文を続ける</v-btn></router-link>
      <router-link to="/check"><v-btn>注文を確定する</v-btn></router-link>
</div>
</template>

<script>
import firebase from 'firebase';
import  {db} from '../firebase';
import "firebase/auth";
// import { doc } from "firebase/firestore";


  export default{
     computed: {

    id() {
      return Number(this.id);
    },
    productname() {
      return String(this.productname);
    },
    price(){
      return String(this.price);
    },
    qty(){
       return Number(this.qty);
    },
    url(){
      return 'https://source.unsplash.com/400x300/?food';
    },    
     },
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
        methods:{
         deleteproduct: function(){
           db.collection("cart").delete(this.doc).then(() => {
    console.log("Document successfully deleted!");
    }).catch((error) => {
    console.error("Error removing document: ", error)
    });

           
            }
         }
         
        
        }
  

// // export default{
// //    computed: {
// // data: function() {
// //    return {
    
    
// //    }
// // }},
// //  methods: {
// //             // getData: function () {
// //             //     const  db = firebase.firestore();
// //             //     // データ取得
// //             //     db.collection('cart').where('id', '==', Number(this.id)).get(
// //             //     ).then((querySnapshot) => {
// //             //         querySnapshot.forEach((doc) => {
// //             //             console.log(doc.id, ' => ', doc.data())
// //             //            this.title=doc.data().title
// //             //            this.price=doc.data().price
// //             //         });
// //             //     });
// //             // },
// // }}
  
</script>


