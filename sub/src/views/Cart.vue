<template>
    <v-data-table
   :headers="headers"
    >

    </v-data-table>
</template>

<script>
import firebase from 'firebase';
import 'firebase/firestore';
export default{
   computed: {
data: function() {
   return {
    
    
   }
}},
 methods: {
            // getData: function () {
            //     const  db = firebase.firestore();
            //     // データ取得
            //     db.collection('cart').where('id', '==', Number(this.id)).get(
            //     ).then((querySnapshot) => {
            //         querySnapshot.forEach((doc) => {
            //             console.log(doc.id, ' => ', doc.data())
            //            this.title=doc.data().title
            //            this.price=doc.data().price
            //         });
            //     });
            // },
}}
</script>


