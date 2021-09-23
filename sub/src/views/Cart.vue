<template>
<div >
   <h1>カート</h1>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            商品名
          </th>
          <th class="text-left">
            値段
          </th>
          <th class="text-left">
            個数
          </th>
          <th class="text-left">
            小計
          </th>
          <th class="text-left">
            削除
          </th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="item in cartdata" :key="item.item_1">
            <td>{{ item.productname }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.qty }}</td>
            <td>小計{{ item.price * item.qty }}円</td>
         <td><v-btn type="submit" @click="deleteproduct(item.docid)">削除</v-btn></td> 
      </tr>
      </tbody> 
      </template>
  </v-simple-table>
   
   <h3>合計{{total}}円</h3>
      <router-link to="/"><v-btn>注文を続ける</v-btn></router-link>
      <router-link to="/checkout"><v-btn>お支払へ</v-btn></router-link>
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
         },  
  }   
 

</script>


