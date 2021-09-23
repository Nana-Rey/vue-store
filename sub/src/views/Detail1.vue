<template>
  <div>
      <div v-if="product">
        <v-container grey lighten-5 >
            <v-card
                class="mx-auto"
                width="500px"
                ma-3 text-xs-center
                >
                <v-spacer></v-spacer>
                <v-img
                    width=500px
                    :src=product.src
                ></v-img>
                <v-card-title>
                    {{product.productname}}
                </v-card-title>
                <v-card-text>
                    {{product.price}}円
                </v-card-text>
                <v-card-text>
                    <input type="number"  v-model.number="quantity" min="1" max="10" />個
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <router-link to="/cart">
                        <v-btn @click="addToCart">
                            <v-icon>
                                mdi-basket
                            </v-icon>
                            カートへ入れる
                        </v-btn>
                    </router-link>
                    
                </v-card-actions>
             

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
            quantity: 1,
            productname:'',
            price:'',
            user_id:'',
            qty:'',
            img:''
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
        addToCart: function(){
        const currentUser = firebase.auth().currentUser;
        this.uid = currentUser.uid;
         db.collection('cart')
         .add({
           id: this.$route.params.id,
           productname: this.product.productname,
           price: this.product.price,
           user_id: currentUser.uid,
           qty: this.quantity,
           img: this.product.src,
         }
         )}
    }
}
</script>

<style>

</style>