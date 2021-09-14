<template>
  <div>
      <div v-if="product">
        <v-container grey lighten-5>
            <v-card
                
                >
                <v-spacer></v-spacer>
                <v-img
                    width=500px
                    :src=product.src
                ></v-img>
                <v-card-title>
                    {{product.productname}}
                    {{product.price}}円
                    個数:<input type="number"  v-model.number="quantity" min="1" max="10" value="1" />個

                </v-card-title>
               
                    <router-link to="/cart"><v-btn @click="addToCart">
                        Add to Cart
                    </v-btn></router-link>
             

            </v-card>
        </v-container>
      </div>
      <div v-else>

          now loading ...
      </div>
  </div>
  
</template>

<script>
import firebase from 'firebase'
import  {db} from '../firebase'
// import "firebase/auth"
export default {
    data(){
        return {
            product : null,
            quantity: '',
        }
    },
    computed:{
        id : function(){
            return this.$route.params.id;
        }
    },
    created(){
        this.getProduct(this.id)
    },
    methods:{
        getProduct: function(id){
            
            db.collection('products')
                .doc(id)
                .get()
                .then((doc) => {
                    this.product = doc.data();
                    console.log(doc.data())
                })
            
          
        },
        addToCart (){
        const currentUser = firebase.auth().currentUser;
        this.uid = currentUser.uid;
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

<style>

</style>