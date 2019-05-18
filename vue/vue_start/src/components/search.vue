<template>
	<div id="container" :class="{c_on: toggle}">
		<div class="c_inner">
			<div class="s_section">
				<div class="s_filter">
					<div class="f_btn">
						<button type="button" v-on:click="filterToggle" :class="{fb_on: fbToggle}">
							<span class="sf_sp"></span>
							<span class="fb_t">필터</span>
						</button>
					</div>
					<div class="fl_wrap" :class="{fw_on: fbToggle}">
						<div class="f_list">
							<p>업로드 날짜</p>
							<ul>
								<li><a href="javascript:void(0);">지난 1시간</a></li>
								<li><a href="javascript:void(0);">오늘</a></li>
								<li><a href="javascript:void(0);">이번 주</a></li>
								<li><a href="javascript:void(0);">이번 달</a></li>
								<li><a href="javascript:void(0);">올해</a></li>
							</ul>
						</div>
						<div class="f_list">
							<p>구분</p>
							<ul>
								<li><a href="javascript:void(0);">동영상</a></li>
								<li><a href="javascript:void(0);">채널</a></li>
								<li><a href="javascript:void(0);">재생목록</a></li>
								<li><a href="javascript:void(0);">영화</a></li>
								<li><a href="javascript:void(0);">프로그램</a></li>
							</ul>
						</div>
						<div class="f_list">
							<p>길이</p>
							<ul>
								<li><a href="javascript:void(0);">단편(4분 이하)</a></li>
								<li><a href="javascript:void(0);">장편(20분 이상)</a></li>
							</ul>
						</div>
						<div class="f_list">
							<p>기능별</p>
							<ul>
								<li><a href="javascript:void(0);">실시간</a></li>
								<li><a href="javascript:void(0);">4K</a></li>
								<li><a href="javascript:void(0);">HD</a></li>
								<li><a href="javascript:void(0);">자막</a></li>
								<li><a href="javascript:void(0);">크리에이티브 커먼즈</a></li>
								<li><a href="javascript:void(0);">360°</a></li>
								<li><a href="javascript:void(0);">VR180</a></li>
								<li><a href="javascript:void(0);">3D</a></li>
								<li><a href="javascript:void(0);">HDR</a></li>
								<li><a href="javascript:void(0);">위치</a></li>
								<li><a href="javascript:void(0);">구입한 항목</a></li>
							</ul>
						</div>
						<div class="f_list">
							<p>정렬기준</p>
							<ul>
								<li><a href="javascript:void(0);">관련성</a></li>
								<li><a href="javascript:void(0);">업로드 날짜</a></li>
								<li><a href="javascript:void(0);">조회수</a></li>
								<li><a href="javascript:void(0);">평점</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="s_list">
					<ul v-for="n in data_list">
						<li v-for="item in n.data.items">
							<searchMedia :s_data = item></searchMedia>
						</li>
					</ul>
				</div>
			</div>
		</div>
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

.sf_sp {background:url(../images/sf_sp.png) no-repeat;}

#container {
	overflow:hidden;
	margin:56px 0 0 0;
	&.c_on {
		margin:56px 0 0 240px;
	}
	.c_inner {
		width:1280px;
		margin:24px auto 0;
		&:after {
			display:block;
			content:'';
			clear:both;
		}
		.s_section {

			.s_filter {
				padding-bottom:15px;
				border-bottom:1px solid #e1e1e1;
				.f_btn {
					button {
						@include flex;
						span {
							display:block;
						}
						span.sf_sp {
							width:19px;
							height:19px;
						}
						span.fb_t {
							margin:0 0 0 10px;
							color:$nmColor;
							font-size:14px;
						}
					}
				}
				.fl_wrap {
					@include flex;
					overflow:hidden;
					height:0;
					transition: all 1s;
					&.fw_on {
						height:auto;
					}
					.f_list {
						@include flexGrid;
						margin-right:32px;
						p {
							padding:15px 0;
							border-bottom:1px solid #e1e1e1;
							font-size:13px;
							color:#0a0a0a;
						}
						ul {
							padding-top:15px;
							li {
								margin-bottom:14px;
								a {
									display:block;
									overflow:hidden;
									text-overflow:ellipsis;
									white-space:nowrap;
									color:$nmColor;
									font-size:14px;
									line-height:20px;
								}
							}
						}
					}
				}
			}
		}
	}
}

</style>

<script>

import { secret } from "../../secret.js";
import searchMedia from '@/components/searchMedia.vue';

export default {
	name: 'search',

	components: {
		searchMedia
	},
	data (){
		return{
			fbToggle: false,
			data_list : []
		}
	},
	computed:{
		toggle(){
			return this.$store.state.left_toggle;
		}
		
	},
	mounted(){
		// var self = this;

		this.eventBus.$on('searchStart', (res)=>{
			this.search();
		});
	},
	created(){
		this.search();
	},
	methods: {
		filterToggle(){
			this.fbToggle = !this.fbToggle;
		},
		search(){
			
			var call_list = [];
			var splitData = this.$store.state.search_text;

			for(var k in splitData){
				call_list.push(this.apiCall(splitData[k]));
			}

			Promise.all(call_list).then((res)=>{
				this.data_list = res;
			}).catch((err)=>{
				console.log(err);
			})
		},
		apiCall(search_text){
			return new Promise ((resolve, reject)=>{
				this.$http.get(`https://www.googleapis.com/youtube/v3/search?key=${secret.youtubeKey}&q=${search_text}&search_text&type=video&part=snippet&maxResults=5`)
				.then((res)=>{
					resolve(res);
				})
				.catch((err)=>{
					reject(err);
				});
			})
		},
	},
	watch: {
		data_list : (val) => {
			console.dir(JSON.parse(JSON.stringify(val)));
		}
	}
}

</script>
