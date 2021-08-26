<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password" id="password">
    <v-btn v-on:click="signUp">登録</v-btn>
    <p>Do you have an account? 
      <router-link to="/login">ログインはこちらから</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp:function(){
    firebase.auth().createUserWithEmailAndPassword(this.email, 
    this.password)
    .then(user=> {
                alert('アカウントを作成しました',user.email)
                this.$router.push('/login')
            })
            .catch(error => {
                alert(error.message)
            })
  }
}}
      
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
