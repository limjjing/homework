<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
	<span v-on:click="test">{{test123}}</span>
	<span>{{case21}}</span>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  
  data: ()=>{
	  return{
		  test123: 'asdf',
		  case21: 'asdfasdf'
	  }
  },
  methods: {
	  test: ()=>{
		  console.log('asdfasdf');
	  }
  },
  components:{
	  HelloWorld
  },
}
</script>
