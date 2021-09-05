<template>
  <div class="login">
    <h2>Login</h2>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password" id="password">
    <v-btn @click="logIn">ログイン
    </v-btn>
    <p>Do you have an account? 
      <router-link to="/login">新規登録</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
import  {db} from '../firebase'


export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  
  methods: {
    logIn:function(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(res=>{
      const user = res.user
      db.collection('users').add({
        user_id:user.uid,
      })
    
    .then(
        alert('ログインしました')
    
    .catch(error => {
               return alert(error.message)
            }))
    })}
  },
  created(){
  firebase.auth().onAuthStateChanged(user=>{
       this.user =user ? user :{}
     })}
}
      
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
