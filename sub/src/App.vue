<template>
  <div id="app">
    <header class="header">
      <router-link to="/">
    
      </router-link>
    </header>
    <div id="nav">
      <router-link to="/">Home </router-link> |
      <router-link to="/detail">Detail </router-link>|
       <router-link to="/cart">Cart </router-link>|
      <router-link to="/login">Login </router-link>|
      <router-link to="/pra">Pra </router-link>|
      <router-link to="/signup">Signup</router-link>
     
       
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
