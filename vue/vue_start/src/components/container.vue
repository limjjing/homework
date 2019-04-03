<template>
	<div id="container">
		<div class="c_inner"></div>
	</div>
</template>

<style lang="scss" scoped>
	#container {
		margin-left:240px; 
		.c_inner {
			min-height:800px; 
			margin:0 30px;
			background:green;
		}
	}
</style>

<script>

export default {
  name: 'container',
  
  data: ()=>{
	  return{
		
	  }
  },
  methods: {
	  test: ()=>{
		  console.log('asdfasdf');
	  }
  },
  
}
</script>
