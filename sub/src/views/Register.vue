<template>
  <v-app>
  <v-form>
      商品登録画面
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="productname"
            label="商品名"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
          <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="price"
            label="値段"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
        <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-text-field
            v-model="img"
            label="写真"
          ></v-text-field>
      </v-col>
      </v-row>
    <v-btn color="primary" @click="submit" >
    送信
  </v-btn>
  <v-btn @click="clear">
      clear
    </v-btn>

    </v-container>
  </v-form>
  </v-app>
</template>

<script>
import  {db} from '../firebase'
  export default {
    data: () => ({
      productname: '',
      price: '',
      img:'',
      row: null
    }),
    methods:{
        submit(){
            db.collection('products').add({
           productname: this.productname,
           price: this.price,
           src: this.img,
        })
      },
      clear() {
        this.productname = '',
        this.price = '',
        this.img = ''
      },
    // created:{
    //     submit (){
    //         db.collection('products').add({
    //        productname: this.productname,
    //        price: this.price,
    //        src: this.img,
    //      }
        //  )
    //     }
    // }
  }
}  
</script>
