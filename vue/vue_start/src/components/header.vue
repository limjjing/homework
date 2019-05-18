<template>
	<div id="header">
		<div class="h_inner">
			<div class="l_menu"><button type="button" v-on:click="leftToggle"><span class="ic_sp"></span></button></div>
			<div class="logo"><a href="javascript:void(0);"></a></div>
			<div class="search">
				<div class="s_inner">
					<div class="input_b"><input type="text" id="" name=""  v-model="search_text" v-on:keypress.enter="search" placeholder="검색어를 입력해주세요"></div>
					<button v-on:click="search"></button>
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

	@mixin flexRow {
		display:flex;
		-ms-flex-direction:row;
		-webkit-flex-direction:row;
		flex-direction:row;
	}

	.ic_sp {background:url(../images/ic_sp.png) no-repeat;}

	#header { 
		position:fixed;
		top:0;
		left:0;
		right:0;
		z-index:1000;
		&:after {
			content:"";
			position:absolute;
			bottom:-5px;
			left:0;
			right:0;
			width:100%;
			height:5px;
			box-shadow:inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
			opacity:1;
		}
		.h_inner {
			@include flexRow;
			-ms-flex-align:center;
			-webkit-align-items:center;
			align-items:center;
			-ms-flex-pack:justify;
			-webkit-justify-content:space-between;
			justify-content:space-between;
			height:56px;
			padding:0 16px;
			background:#fff;
			.l_menu {
				margin-right:16px;
				button {
					display:block;
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
				a {
					display:block;
					width:96px;
					height:24px;
					background:#ffa4a4;
				}
			}
			
			.search {
				@include flexRow;
				justify-content:center;
				flex:1;
				margin:0 40px;
				.s_inner {
					@include flexRow;
					width:100%;
					max-width:640px;
					.input_b {
						@include flexRow;
						-webkit-flex:1;
						flex:1;
						input {
							display:block;
							width:100%;
							height:28px;
							padding:0 6px;
							border:1px solid #ccc;
							font-size:15px;
							line-height:20px;
						}
					}
					
					button {
						display:block;
						width:65px;
						height:30px;
						background:#d3d3d3;
					}
				}
			}
			.h_util {
				@include flexRow;
				ul {
					display:-webkit-box;
					display:-moz-box;
					display:-ms-flexbox;
					display:-webkit-flex;
					display:flex;
					-webkit-flex-flow:row wrap;
					justify-content:space-around;
					li {
						margin-left:8px;
						a {
							display:block;
							overflow:hidden;
							width:24px;
							height:24px;
							padding:8px;
							span.ic_sp {
								display:block;
								width:16px;
								height:16px;
							}
							
						}
						&:nth-child(1) a span.ic_sp {margin:6px auto 0 auto;}
						&:nth-child(2) a span.ic_sp {margin:4px auto 0 auto; background-position:-23px 0;}
						&:nth-child(3) a span.ic_sp {margin:4px auto 0 auto; background-position:-46px 0;}
						&:nth-child(4) a span.ic_sp {margin:4px auto 0 auto; background-position:-69px 0;}
					}
				}
			}
		}
	}
</style>

<script>

export default {
	name: 'headNavi',

	data: ()=>{
		return{
			search_text : "",
			left_nav : true,
		}
	},
	methods: {
		search(){
			this.$router.push('/search');
			console.log("start search!!");
			
			var value = this.search_text;
			var splitData = value.split('//');

			this.$store.state.search_text = splitData;
			this.eventBus.$emit('searchStart', true);

			// var call_list = [];

			// for(var k in splitData){
			// 	call_list.push(this.apiCall(splitData[k]));
			// }

			// Promise.all(call_list).then((res)=>{
			// 	// console.log(res);
			// 	this.eventBus.$emit('succesSearch', res);

			// }).catch((err)=>{
			// 	console.log(err);
			// })
		},
		// apiCall(search_text){
		// 	return new Promise ((resolve, reject)=>{
		// 		this.$http.get(`https://www.googleapis.com/youtube/v3/search?key=${secret.youtubeKey}&q=${search_text}&search_text&type=video&part=snippet&maxResults=5`)
		// 		.then((res)=>{
		// 			resolve(res);
		// 		})
		// 		.catch((err)=>{
		// 			reject(err);
		// 		});
		// 	})
		// },
		leftToggle(){
			// this.left_nav = !this.left_nav;
			// this.eventBus.$emit('leftToggle', this.left_nav);
			this.$store.state.left_toggle = !this.$store.state.left_toggle;
		}
	}
}
</script>
