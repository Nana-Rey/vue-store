<template>
  <v-card
    class="mx-auto"
    max-width="auto"
  >
      <v-spacer></v-spacer>
    <v-container fluid>
      <v-row dense>
          
        <v-col
          v-for="item in products"
          :key="item.name"
          :cols="item.flex"
        >
          <v-card>
            <v-img
              :src="item.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              {{item.name}}
              {{item.price}}円
              <v-btn><router-link :to="{name:'Pra', params:{id:item.id}}">詳細</router-link></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import  {db} from '../firebase'
export default {
    data(){
        return{
         products:[],
        }
     },
    created:function(){
        this.getProducts();
        console.log(this.products)
    },
    methods:{
        getProducts: function(){
            db.collection('products')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    var product = doc.data();
                    console.log(product)
                    console.log(doc.id)
                    this.products.push({
                        id : doc.id,
                        name: product.productname,
                        price : product.price,
                        img: product.src,
                        flex: '6'
                    })
                    

                })
            })
        } 
    }
}

        // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      
    

</script>
// methods:{
    //    db.collection('products')
    //      .get()
    //      .then((querySnapshot) => {
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());