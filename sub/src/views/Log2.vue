<template>
<div>
  <v-simple-table height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           日付
          </th>
          <th class="text-left">
            値段
          </th>
          <th class="text-left">
              数
          </th>
          <th class="text-left">
              小計
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in cart"
          :key="item.productname"
        >
          <td>{{ item.createdAt }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.qty}}</td>
          <td>{{ item.orderTotal }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import  {db} from '../firebase'
import firebase from 'firebase'
import "firebase/auth"
  export default {
    data () {
      return {
          cart:[],
    }
    },
    created(){
       const currentUser = firebase.auth().currentUser;
        this.uid = currentUser.uid;
       db.collection('Orders')
         .where('user_id','==',currentUser.uid)
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