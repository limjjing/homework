<template>
	<a href="javascript:void(0);" v-on:click="movedetail">
		<div class="sl_thumbs">
			<img :src="s_data.snippet.thumbnails.high.url" alt="">
		</div>
		<div class="sl_text">
			<p class="sl_title">{{s_data.snippet.title}}</p>
			<p class="sl_info">
				<span class="si_1">{{s_data.snippet.channelTitle}}</span>
				<span class="si_cir">•</span>
				<span class="si_2">조회수 6.3만회</span>
				<span class="si_cir">•</span>
				<span class="si_3">1주 전</span>
			</p>
			<p class="sl_ct">{{s_data.snippet.description}}</p>
		</div>
	</a>
</template>

<style lang="scss" scoped>

$nmColor:#606060;

@mixin flex {
	display:-webkit-box;
	display:-moz-box;
	display:-ms-flexbox;
	display:-webkit-flex;
	display:flex;
}

@mixin flexGrid {
	-webkit-box-flex:1;
	-moz-box-flex:1;
	-webkit-flex:1;
	-ms-flex:1;
	flex:1;
}

.s_list {
	ul {
		padding-top:16px;
		li {
			overflow:hidden;
			margin-bottom:16px;
			a {
				@include flex;
				height:138px;
				.sl_thumbs {
					margin-right:16px;
					img {
						width:246px;
						height:138px;
					}
				}
				.sl_text {
					max-width:600px;
					p.sl_title {
						font-size:18px;
					}
					p.sl_info {
						margin:3px 0 10px 0;
						color:$nmColor;
						font-size:13px;
						span.si_cir {
							margin:0 4px;
						}
					}
					p.sl_ct {
						color:$nmColor;
					}
				}
			}
		}
	}
}

</style>

<script>

export default {
	name: 'searchMedia',
	
	props: [
		's_data'
	],

	beforeMount(){
		console.log(this.s_data);
	},

	data: ()=>{
		return{

		}
	},
	mounted(){

	},
	methods: {
		movedetail(){
			console.log(this.s_data);
			this.$router.push({name: 'viewV', params: this.s_data});
			this.$store.state.select_data = this.s_data;
		}
	},
	watch: {

	}
}
</script>
