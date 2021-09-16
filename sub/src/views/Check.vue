<template>
  <div>
      <h1>ご注文内容の確認</h1>
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
        </tr>
      </thead>
      <tbody>
      <tr v-for="item in product" :key="item.item_1">
            <td>{{ item.productname }}</td>
            <td>{{ item.price }}円</td>
            <td>{{ item.qty }}個</td>
            <td>{{ item.price * item.qty }}円</td>
      </tr>
      </tbody> 
      </template>
  </v-simple-table>
   <h3>合計{{total}}円</h3>
      <router-link to ="/cart"><v-btn>カートに戻る</v-btn></router-link>
      <router-link to ="/after"><v-btn @click="addlog">購入へ</v-btn></router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
import  {db} from '../firebase';
import "firebase/auth";
export default {
  
  data(){
        return {
          product:[],
          total: '',
          db:null,
          productname:'',
          price:'',
          qty:'',
          user_id:'',
          createdAt:'',
          id:'',
          cartDocid: ''
        }
  },
   created:function(){
        this.getProducts();
        this.addlog();
        console.log(this.products)
    }, 
    mounted(){
      if (localStorage.getItem('product')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('product'));
      } catch(e) {
        localStorage.removeItem('product');
      }
    }
    },
    methods:{
        getProducts: function(){
           const currentUser = firebase.auth().currentUser;
           this.uid = currentUser.uid;
            this.total = 0;
            var docid;
            db.collection('cart')
            .where('user_id','==',currentUser.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc => {
                    var product = doc.data();
                    docid = doc.id
                    this.product.push({
                        productname: product.productname,
                        price : product.price,
                        qty: product.qty,
                        id: doc.id,
                        
                    })
                    console.log(doc.id)
                    this.total += product.price * product.qty;
                }))
            }).catch((error) => {
                     console.error("Error removing document: ", error)
               });
              this.cartDocId = docid;
            },
            addlog(){
               //if(product==[]) return;

              const currentUser = firebase.auth().currentUser;
              this.uid = currentUser.uid;
              var order = {
                orderid : Date.now(),
                userid : currentUser.uid,
                createdAt: new Date(),
                orderTotal : this.total
              }

              db.collection('Orders')
                .add(order)
                .then(data=>console.log(data))
                .catch(error=>console.log(error.message))
             

              this.product.forEach(p=>{
                var orderItem = {
                  orderId : order.orderid,
                  id: p.id,
                  productname: p.productname,
                  price: p.price,
                  user_id: currentUser.uid,
                  qty: p.qty,
                };

                console.log('orderitem:' + orderItem)
                db.collection("OrderItems")
                .add(orderItem)
                .then(data=>console.log(data))
                .catch(error=>console.log(error.message));
 
              });
              //console.log(order)
            
              
              db.collection('cart')
              .where('user_id','==',currentUser.uid)
              .get()
              .then((querySnapshot) => {
                  querySnapshot.forEach((doc => {
                    doc.ref.delete();
                  }))
              });

            }   
    }
 
                    

            
            
  
            
        // addlog: function(){
        //     const currentUser = firebase.auth().currentUser;
        //     this.uid = currentUser.uid;
        //     // const db.collection('cart').doc({this.id})
        //     db.collection('log')
        //     .addAll({
        //     productname: this.item.productname,
        //      price: this.item.price,
        //      user_id: currentUser.uid,
        //      qty: this.item.qty,
        //  }
        //     )}
            
 }

</script>

<style>

</style>