<template>
	<div class="cm_wrap">
		<div class="cm_user"></div>
		<div class="cm_tbox">
			<p class="nick">
				<span class="n_1">{{comment_data.snippet.topLevelComment.snippet.authorDisplayName}}</span>
				<span class="n_2"> 5일 전</span>
			</p>
			<p class="cm_t">{{comment_data.snippet.topLevelComment.snippet.textDisplay}}</p>
			<div class="cm_util">
				<span class="cu_1"><span class=""></span> 46</span>
				<span class="cu_2"><span class=""></span> 10</span>
				<button type="button">답글</button>
			</div>
			<div class="comm_view"><button type="button">답글보기</button></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
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

	.cm_input {
		@include flex;
		.profile {
			width:40px;
			height:40px;
			background:#ddd;
			border-radius:100%;
		}
		.input_b {
			width:100%;
			margin-left:15px;
			border-bottom:1px solid #e5e5e5;
			.ib_in {
				margin-top:14px;
				color:#606060;
				font-size:14px;
			}
		}
	}

	.cm_list {
		ul {
			padding-top:25px;
			li {
				margin-bottom:25px;
				.cm_wrap {
					@include flex;
					.cm_user {
						width:40px;
						height:40px;
						background:#ddd;
						border-radius:100%;
					}
					.cm_tbox {
						@include flexGrid;
						margin:0 0 0 18px;
						p.nick {
							span {
								font-size:14px;
							}
							span.n_1 {
								color:#0a0a0a;
							}
						}
						p.cm_t {
							margin:10px 0 10px 0;
							font-size:14px;
						}
						.comm_view {
							margin-top:10px;
							button {
								font-size:14px;
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
	name: 'commentMedia',
	
	props: [
		'comment_data'
	],

	beforeMount(){
		console.log(this.comment_data);
	},

	data: ()=>{
		return{
			
		}
	},
	mounted(){

	},
	methods: {
		
	},
	watch: {

	}
}
</script>
