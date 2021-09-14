<template>
<div>
    <h1>お支払い</h1>
    <h2>お支払い方法を選択</h2>
      <v-container fluid>
    
    <h2><li>クレジットカード </li></h2>    
   
  </v-container>
   <v-card>
    <form>
        <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <input type="text" placeholder="クレジットカード名義人" /><br>
        <input type="text" placeholder="カード番号"/>
    </v-col>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
       <input type="number" placeholder="MM" min="1" max="12"/>
       <input type="number" placeholder="YYYY" min="2021" max="2041"/>
       <input type="text" placeholder="セキュリティコード"/>
      </v-col>
       
    </v-row>
  </v-container>
    </form>
    </v-card>
<h2><li>ご住所</li></h2>
    <v-card>
        郵便番号:<input type="postal-code" placeholder="郵便番号" autocomplete="postal-code" v-model="post_code" /><br>
        都道府県:<input type="address-level1" placeholder="都道府県" autocomplete="adress-level1" v-model="adress_level1" /><br>
        市区町村:<input type="address-level2" placeholder="市区町村" autocomplete="address-level2" v-model="address_level2"/><br>
        番地・マンション名:<input type="address-line1" placeholder="番地・マンション名" autocomplete="address-line1" v-model="address_line1"/><br>

    </v-card>
    <router-link to="/after">
    <v-btn
        type="submit"
        @click="useradress"
      >購入
      </v-btn>
    </router-link>
</div>
</template>

<script>
// import firebase from 'firebase'
import  {db} from '../firebase'
export default {
    data(){
        return{
            db:null,
            post_code:'',
            adress_level1:'',
            address_level2:'',
            address_line1:''
        }
    },
  methods:{
      useradress(){
          db.collection('user_adress').add({
              post_code: this.post_code,
              adress_level1: this.adress_level1,
              address_level2: this.address_level2,
              address_line1: this.address_line1,
          })
      },
      
        
      
  }
}
</script>
