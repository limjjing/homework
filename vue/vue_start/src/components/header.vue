<template>
	<div id="header">
		<div class="h_inner">
			<div class="l_menu"><button type="button" v-on:click="test">메뉴</button></div>
			<div class="logo">로고</div>
			<div class="search">
				<input type="text" id="" name="">
			</div>
			<div class="h_util"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	#header {
		height:56px;
		background:#282828;
		.l_menu {
			float:left;
			button {
				width:40px;
				height:40px;
				color:#fff;
			}
		}
		.logo {float:left;}
	}
	
</style>

<script>

export default {
  name: 'heheadNavi',
  
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
