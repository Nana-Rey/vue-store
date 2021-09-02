<template>
<div>
   <ul>
      <table>
         {{ allData }}
      </table>
   </ul>
</div>
</template>

<script>
//import firebase from 'firebase';
import  {db} from '../firebase';

  export default{
     data(){
        return{
         allData:[],
        }
     },
  created(){
     
        db.collection('cart')
        .get().then(snapshot =>{
           snapshot.forEach(doc=>{
              this.allData.push(doc.data())
           })
        })
     
  }
  
  

// // export default{
// //    computed: {
// // data: function() {
// //    return {
    
    
// //    }
// // }},
// //  methods: {
// //             // getData: function () {
// //             //     const  db = firebase.firestore();
// //             //     // データ取得
// //             //     db.collection('cart').where('id', '==', Number(this.id)).get(
// //             //     ).then((querySnapshot) => {
// //             //         querySnapshot.forEach((doc) => {
// //             //             console.log(doc.id, ' => ', doc.data())
// //             //            this.title=doc.data().title
// //             //            this.price=doc.data().price
// //             //         });
// //             //     });
// //             // },
// // }}
  }
</script>


