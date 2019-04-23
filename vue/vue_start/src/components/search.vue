<template>
	
	<div id="container" :class="{c_on: toggle}">
		<div class="c_inner">

			<div class="s_section">
				
				<div class="s_filter">
					<div class="f_btn">
						<button type="button">필터</button>
					</div>
					<div class="fl_wrap">
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

					<ul>
						<li>
							<a href="javascript:void(0);">
								<div class="sl_thumbs">
									<img src="https://i.ytimg.com/vi/2S24-y0Ij3Y/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBflB7oI20CSw-XzTB3-Qob95uikQ" alt="">
								</div>
								<div class="sl_text">
									<p class="sl_title">BLACKPINK - 'Kill This Love' M/V</p>
									<p class="sl_info">
										<span class="si_1">BLACKPINK</span>
										<span class="si_cir">•</span>
										<span class="si_2">조회수 2.3억회</span>
										<span class="si_cir">•</span>
										<span class="si_3">2주 전</span>
									</p>
									<p class="sl_ct">BLACKPINK - 'Kill This Love' Available on iTunes @ http://smarturl.it/KillThisLove/iTunes Available on Apple Music ...</p>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<div class="sl_thumbs">
									<img src="https://i.ytimg.com/vi/bkGSf9VeWTE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzl4346KvkWJeW8b6pKrJjxrTDoQ" alt="">
								</div>
								<div class="sl_text">
									<p class="sl_title">블랙핑크(BLACKPINK) - Kill This Love 교차편집(Stage mix)</p>
									<p class="sl_info">
										<span class="si_1">탱</span>
										<span class="si_cir">•</span>
										<span class="si_2">조회수 142만회</span>
										<span class="si_cir">•</span>
										<span class="si_3">1주 전</span>
									</p>
									<p class="sl_ct">BLACKPINK#KillThisLove#Stagemix 저 너무 못만드는 것 같아서...편집 공부 좀 하고 다시올게요.</p>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<div class="sl_thumbs">
									<img src="https://i.ytimg.com/vi/XjyBzxYtfQs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD9WS_FzbiSG-RCLLWn-r_92lrl2w" alt="">
								</div>
								<div class="sl_text">
									<p class="sl_title">[전곡 듣기/Full Album] BLACKPINK(블랙핑크) 2nd Mini Album [KILL THIS LOVE]</p>
									<p class="sl_info">
										<span class="si_1">푸딩백곰</span>
										<span class="si_cir">•</span>
										<span class="si_2">조회수 34만회</span>
										<span class="si_cir">•</span>
										<span class="si_3">2주 전</span>
									</p>
									<p class="sl_ct">앨범 : 2nd Mini Album [KILL THIS LOVE] 아티스트 : BLACKPINK (블랙핑크) 발매일 : 2019.04.05.</p>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<div class="sl_thumbs">
									<img src="https://i.ytimg.com/vi/7_Kg9MrzOko/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB1oT_3DetM6gmDDVApWa0iSw0d_Q" alt="">
								</div>
								<div class="sl_text">
									<p class="sl_title">BLACKPINK (블랙핑크) _ Kill This Love 1 Hour Loop (1시간)</p>
									<p class="sl_info">
										<span class="si_1">2fzy</span>
										<span class="si_cir">•</span>
										<span class="si_2">조회수 27만회</span>
										<span class="si_cir">•</span>
										<span class="si_3">2주 전</span>
									</p>
									<p class="sl_ct">Original MV: https://www.youtube.com/watch?v=2S24-y0Ij3Y #BLACKPINK #블랙핑크 #KILLTHISLOVE Huge shoutout to my boy ...</p>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<div class="sl_thumbs">
									<img src="https://i.ytimg.com/vi/MOwaUlXZxkI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCS4mRBca2sSajzuhL1t9BmwdRg_g" alt="">
								</div>
								<div class="sl_text">
									<p class="sl_title">BLACKPINK - 'Kill This Love' DANCE PRACTICE VIDEO (MOVING VER.)</p>
									<p class="sl_info">
										<span class="si_1">BLACKPINK</span>
										<span class="si_cir">•</span>
										<span class="si_2">조회수 4159만회</span>
										<span class="si_cir">•</span>
										<span class="si_3">2주 전</span>
									</p>
									<p class="sl_ct">BLACKPINK #블랙핑크 #KILLTHISLOVE #DANCE_PRACTICE #MOVING_VERSION #안무영상 #YG.</p>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);">
								<div class="sl_thumbs">
									<img src="https://i.ytimg.com/vi/6z6uo7_dseQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBLeDywKpAm_jdTBuaNrMW2agaHKQ" alt="">
								</div>
								<div class="sl_text">
									<p class="sl_title">[블랙핑크]씨디 씹어먹은 미친 라이브(블부심)</p>
									<p class="sl_info">
										<span class="si_1">행복한 블핑이네</span>
										<span class="si_cir">•</span>
										<span class="si_2">조회수 6.3만회</span>
										<span class="si_cir">•</span>
										<span class="si_3">1주 전</span>
									</p>
									<p class="sl_ct">설명</p>
								</div>
							</a>
						</li>
					</ul>

				</div>

			</div>

			<div class="s_info">
				<img src="../images/search_info.png" alt="">
			</div>

		</div>
	</div>

</template>

<style lang="scss" scoped>

$nmColor:#606060;

#container {
	overflow:hidden;
	margin:56px 0 0 0;
	background:#fafafa;
	&.c_on {
		margin:56px 0 0 240px;
	}
	.c_inner {
		width:1280px;
		min-height:800px;
		margin:24px auto 0;
		.s_section {
			float:left;
			width:855px;
			.s_filter {
				padding-bottom:15px;
				border-bottom:1px solid #e1e1e1;
				.f_btn {
					button {
						color:$nmColor;
						font-size:14px;
					}
				}
				.fl_wrap {
					overflow:hidden;
					.f_list {
						float:left;
						width:139px;
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
			
			.s_list {
				ul {
					padding-top:16px;
					li {
						overflow:hidden;
						margin-bottom:16px;
						.sl_thumbs {
							float:left;
							img {
								width:246px;
								height:138px;
							}
						}
						.sl_text {
							margin:0 0 0 262px;
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
		.s_info {
			float:right;
			width:385px;
		}
		
	}
}

</style>

<script>

export default {
	name: 'search',
  
	data: ()=>{
		return{
			toggle: true
		}
	},
	mounted(){
		var self = this;
		this.eventBus.$on('leftToggle', (flag)=>{
			self.toggle = flag;
		});
	},
	watch: {
		toggle: (val)=>{
			if(val){
				console.log('on');
			}else{
				console.log('off');
			}
		}
	}
}

</script>
