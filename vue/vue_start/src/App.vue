<template>
  <div id="app">
	  <headNavi></headNavi>
	  <leftNavi></leftNavi>
	  <container></container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import headNavi from '@/components/header.vue'
import leftNavi from '@/components/leftNavi.vue'
import container from '@/components/container.vue'
export default {
	components:{
		headNavi,
		leftNavi,
		container
	}
}
</script>
