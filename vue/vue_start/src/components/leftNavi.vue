<template>
	<div id="leftNavi">
		<a href="javascript:void(0);">테스트</a>
	</div>
</template>

<style lang="scss" scoped>
	#leftNavi {position:absolute; width:240px; height:600px; background:#ddd;
		a{color:#ddd;}
	}
</style>

<script>

export default {
  name: 'leftNavi',
  
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
