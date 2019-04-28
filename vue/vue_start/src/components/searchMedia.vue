<template>
	<div class="s_list">
		<ul>
			<li>
				<a href="javascript:void(0);">
					<div class="sl_thumbs">
						<img :src="media_data.snippet.thumbnails.high.url" alt="">
					</div>
					<div class="sl_text">
						<p class="sl_title">{{media_data.snippet.title}}</p>
						<p class="sl_info">
							<span class="si_1">{{media_data.snippet.channelTitle}}</span>
							<span class="si_cir">•</span>
							<span class="si_2">조회수 6.3만회</span>
							<span class="si_cir">•</span>
							<span class="si_3">1주 전</span>
						</p>
						<p class="sl_ct">{{media_data.snippet.description}}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
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
		'media_data'
	],

	beforeMount(){
		console.log(this.media_data);
	},

	data: ()=>{
		return{

		}
	},
	mounted(){

	},
	watch: {

	}
}
</script>
