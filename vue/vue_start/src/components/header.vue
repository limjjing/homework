<template>
	<div id="header">
		<div class="h_inner">
			<div class="h_l">
				<div class="l_menu"><button type="button" v-on:click="test"><span class="ic_sp"></span></button></div>
				<div class="logo"><a href="javascript:void(0);"></a></div>
			</div>
			<div class="search">
				<div class="s_inner">
					<input type="text" id="" name="">
					<button type="submit"></button>
				</div>
			</div>
			<div class="h_util">
				<ul>
					<li><a href="javascript:void(0);"><span class="ic_sp"></span></a></li>
					<li><a href="javascript:void(0);"><span class="ic_sp"></span></a></li>
					<li><a href="javascript:void(0);"><span class="ic_sp"></span></a></li>
					<li><a href="javascript:void(0);"><span class="ic_sp"></span></a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.ic_sp {background:url(../images/ic_sp.png) no-repeat;}

	#header {
		height:56px; 
		padding:0 16px;
		.h_inner {
			display:flex;
			flex-direction:row;
			.h_l {
				display:flex;
				flex-direction:row;
				.l_menu {
					float:left;
					margin-top:10px;
					button {
						width:40px; 
						height:40px; 
						color:#fff;
						span.ic_sp {
							display:block; 
							width:18px; 
							height:12px; 
							margin:0 auto; 
							background-position:-94px -2px;
						}
					}
				}
				.logo {
					float:left;
					margin:19px 0 0 0;
					a {
						display:block; 
						width:96px; 
						height:24px; 
						background:#ffa4a4;
					}
				}
			}
			.search {
				display:flex;
				flex-direction:row;
				justify-content:center;
				flex:1;
				margin:13px 40px 0 40px;
				.s_inner {
					position:relative;
					width:100%;
					max-width:640px;
					input {
						width:100%; 
						height:28px; 
						border:1px solid #ccc;
					}
					button {
						position:absolute; 
						top:0; 
						right:-2px; 
						width:65px; 
						height:30px; 
						background:#d3d3d3;
					}
				}
			}
			.h_util {
				
				ul {
					li {
						float:left;
						a {
							display:block;
							width:24px; 
							height:24px;
							span.ic_sp {
								display:block;
								width:16px;
								height:16px;
							}
							
						}

						@for $i from 1 through 4 {
							&:nth-child(#{$i}) a span.ic_sp {
								background-position:-23px 0;
							}
						}

						
					}
				}
			}
		}
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
