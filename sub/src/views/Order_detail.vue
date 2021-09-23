<template>
  <div>
    オーダーid:{{orderId}}
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
    <tr v-for="item in cartdetail" :key="item.productname">
      
      <td>{{item.productname}}</td>
      <td>{{item.price}}</td>
      <td>{{item.qty}}</td>
      <td>{{item.price * item.qty}}</td>
      <td><v-img
                    width=500px
                    height="150"
                    :src=item.img
                ></v-img></td>
    </tr> 
      </tbody> 
      </template>
  </v-simple-table>
  </div>
</template>

<script>
import  {db} from '../firebase'
export default {
data(){
  return{
    cartdetail:[],
    img:'',
    price:'',
  }
},
computed:{
  orderId: function(){
    return this.$route.params.orderId;
  }
},
created(){
  this.getDetail(this.orderId)
},
methods:{
  getDetail:function(orderId){
    console.log(orderId)
    var orderDetails = [];
    db.collection('OrderItems')
      .where("orderId","==",orderId)
      .get()
      .then(snapshot =>{
        snapshot.forEach(doc=>{ 
          var orderDetail = doc.data();
          orderDetails.push({
            productname : orderDetail.productname,
            price: orderDetail.price,
            qty: orderDetail.qty,
            img: orderDetail.img
          })
          console.log(doc.data())
        })
      }).catch(error=>console.log(error.result))
      this.cartdetail = orderDetails;
        // (doc) => {
        // var cartdetail = doc.data();
        //   this.cartdetail.push({
        //     productname: cartdetail.productname,
        //     price : cartdetail.price,
        //     qty: cartdetail.qty,
        //     img: cartdetail.img,
        // })
        //   console.log(doc.data())
  }
  
 }  
}  

</script>

<style>

</style>