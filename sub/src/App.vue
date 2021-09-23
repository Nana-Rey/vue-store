<template>
  <div id="app">
  
    <v-app-bar
      absolute
      color=#FFD54F
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-text>Store</v-app-bar-text>

      <v-spacer></v-spacer>

      <router-link to="/cart">
      <v-btn icon >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      color=#D4E157
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><router-link to="/product2">Home </router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title> <router-link to="/cart">カート</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/login">ログイン</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/signup">新規登録</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/log2">お買物履歴</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/register">商品登録</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> 
   
    <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="500"
    >
      <v-container style="height: 100px;"></v-container>
  </v-sheet>
 
    <header class="header">
      <router-link to="/product2">
    
      </router-link>
    </header>
    <v-main>
      <router-view/>
    </v-main>
    
    
  </div>
</template>

<script>
  export default {
    data: ()=>({
     drawer: false,
      group: null,
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },

  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:dark;
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
