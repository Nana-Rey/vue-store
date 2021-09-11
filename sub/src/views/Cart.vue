<template>
<div >
   <h1>カート</h1>
   <ul>
      <li v-for="item in cartdata" :key="item.item_1">
         <div>{{ item.productname }}</div>
            <div>{{ item.price }}</div>
            <div>{{ item.id }}</div>
            <div>{{ item.qty }}</div>
       
         <v-btn type="submit" @click="deleteproduct(item.docid)">削除</v-btn>
         <span>小計{{ item.price * item.qty }}円</span>
      </li> 
   </ul>
   <h3>合計{{total}}円</h3>
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
         num:'',
         total: 0
        }
     },
      created(){
         this.display();
      },
        
        methods:{
            deleteproduct: function(deleteid){
               
               db.collection("cart")
                  .doc(deleteid)
                  .delete().then(() => {
                  console.log("Document successfully deleted!");
               }).catch((error) => {
                     console.error("Error removing document: ", error)
               });
               this.cartdata = [];
               this.display();
              
            },
            display: function(){
               const currentUser = firebase.auth().currentUser;
               this.total = 0;

               db.collection('cart')
                  .where('user_id','==',currentUser.uid)
                  .get()
                  .then(snapshot =>{
                     snapshot.forEach(doc=>{ 
                        //console.log(doc.id, "=>",doc.data());
                        let dbitem = doc.data();

                        let cartitem = {
                           docid : doc.id,
                           id : dbitem.id,
                           price : dbitem.price,
                           productname: dbitem.productname,
                           qty: dbitem.qty,
                           user_id: dbitem.user_id,
                           
                        }
                        this.total += cartitem.price * cartitem.qty;

                        // console.log(cartitem)
                        this.cartdata.push(cartitem)
                        // console.log(doc.id)
                        //deleteproduct(doc.id)

                     },)
                  })
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


