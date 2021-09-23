<template>
<div>
  <v-simple-table height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            オーダID
          </th>
          <th class="text-left">
           日付
          </th>
          <th class="text-left">
            合計
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in cart"
          :key="item.productname"
          
        >
          <td><router-link :to="{name:'Order_detail', params:{orderId:item.orderId}}">{{item.orderId}}</router-link></td>
          <td>{{ item.createdAt}}</td>
          <td>{{ item.orderTotal }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import  {db} from '../firebase'
import firebase from 'firebase/app';
//import firebase from 'firebase'
import 'firebase/firestore';
import "firebase/auth";

  export default {
    data () {
      return {
          cart:[],
    }
    },
    computed:{
        orderid : function(){
            return this.$route.params.orderid;
        }
    },
    methods:{
      getTimeStamp: function(date){
        return new Date(date).toDateString()
      }
    },
    created(){
      firebase.auth.is
       const currentUser = firebase.auth().currentUser;
       
       if(currentUser){
         this.uid = currentUser.uid;
       } else {
         this.$router.push('Login')
         return
       }
       //console.log(currentUser)
        
        
       db.collection('Orders')
         .where('userid','==',currentUser.uid)
         .get()
         .then(snapshot =>{
           snapshot.forEach(doc=>{ 
            console.log(doc.id, "=>",doc.data());
            this.cart.push(doc.data())
           },
        )})
        console.log(this.cart)},

        
  }

</script>