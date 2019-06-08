<template>
	<div class="cm_wrap">
		<div class="cm_user"></div>
		<div class="cm_tbox">
			<p class="nick"> <span class="n_1">{{comment_data.snippet.topLevelComment.snippet.authorDisplayName}}</span> <span class="n_2" ref="timeC"> </span> </p>
			<p class="cm_t">{{comment_data.snippet.topLevelComment.snippet.textDisplay}}</p>
			<div class="cm_util"> <span class="cu_1"> <span class="cu_ic"> <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon">
				<g class="style-scope yt-icon">
					<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path>
				</g>
				</svg> </span> <span class="cu_t">{{comment_data.snippet.topLevelComment.snippet.likeCount}}</span></span> <span class="cu_2"> <span class="cu_ic"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon">
				<g class="style-scope yt-icon">
					<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path>
				</g>
				</svg></span> </span>
				<button type="button" class="btn_r1">답글</button>
			</div>
			<div class="comm_view">
				<button type="button">답글보기</button>
			</div>
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
							span.n_1 {
								color:#0a0a0a;
								font-size:14px;
							}
							span.n_2 {
								margin-left:7px;
								color:#0a0a0a;
								font-size:13px;
							}
						}
						p.cm_t {
							margin:10px 0 10px 0;
							font-size:14px;
						}
						.cm_util {
							span.cu_ic {
								vertical-align:-3px;
								svg {
									width:16px;
									height:16px;
									g {
										fill:#909090;
									}
								}
							}
							.cu_1 {
								span.cu_t {
									margin:0 20px 0 8px;
								}
							}
							button.btn_r1 {
								margin-left:30px;
							}
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
		this.dateCon();
	},
	methods: {
		dateCon(){
			// var date = this.$moment().local().format('YYYYMMDDhhmm');

			var date = this.$moment(this.$moment(this.comment_data.snippet.topLevelComment.snippet.publishedAt).format('YYYYMMDDhhmm'),"YYYYMMDDhhmm").local().fromNow();
			// console.log(date);
			// console.log(this.$moment(this.comment_data.snippet.topLevelComment.snippet.publishedAt).valueOf());
			// console.log(parseInt(this.$moment().valueOf()));
			// console.log(parseInt(this.$moment().valueOf() - this.$moment(this.comment_data.snippet.topLevelComment.snippet.publishedAt).valueOf()));
			// var k = this.$moment().valueOf() - this.$moment(this.comment_data.snippet.topLevelComment.snippet.publishedAt).valueOf();
			// console.log(k / 1000);
			// var commentDate = this.$moment(this.comment_data.snippet.topLevelComment.snippet.publishedAt).format('YYYYMMDDhhmm');
			// console.log(commentDate);
			this.$refs.timeC.innerText = date;
		}
	},
	watch: {

	}
}
</script>
