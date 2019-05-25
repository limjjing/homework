<template>
	<div class="v_container">
		<div class="v_inner">
			<div class="v_section">
				<div class="player">
					<!-- <img src="../images/player_sample.png" alt=""> -->
					<youtube-media :video-id="v_data.id" :player-width=854 :player-height=480></youtube-media>

				</div>


				<div class="t_line">
					<p class="t_title">{{v_data.snippet.title}}</p>
					<div class="t_util">
						<p>조회수 23,740회</p>
						<ul>
							<li>
								<button type="button">
									<span class="tu_ic"></span>
									<span class="">11만</span>
								</button>
							</li>
							<li>
								<button type="button">
									<span class="tu_ic"></span>
									<span class="">1.6천</span>
								</button>
							</li>
							<li>
								<button type="button">
									<span class="tu_ic"></span>
									<span class="">공유</span>
								</button>
							</li>
							<li>
								<button type="button">
									<span class="tu_ic"></span>
									<span class="">저장</span>
								</button>
							</li>
							<li>
								<button type="button">
									<span class="tu_ic"></span>
									<span class="">설정</span>
								</button>
							</li>
						</ul>
					</div>
				</div>

				<div class="v_info">
					<div class="ch_line">
						<div class="ch_user">
							<a href="javascript:void(0);"><div class="cu_thumb"></div></a>
							<div class="cu_info">
								<p class="ci_1"><a href="javascript:void(0);">{{v_data.snippet.channelTitle}}</a></p>
								<p class="ci_2">게시일: {{v_data.snippet.publishedAt}}</p>
							</div>
						</div>
						<div class="subscription">
							<button type="button">구독 3.8천</button>
						</div>
					</div>

					<div class="vi_text">
						<p>{{v_data.snippet.description}}</p>
						<div class="vt_bb">
							<span class="vb_c1">카테고리</span>
							<a href="javascript:void(0);">엔터테인먼트</a>
						</div>
					</div>
					<div class="vi_btn">
						<button type="button">더보기</button>
					</div>
				</div>

				<div class="comment">
					<div class="comm_h">
						<span class="comm_1">댓글 10개</span>
						<span class="comm_2"><button type="button">정렬 기준</button></span>
					</div>

					<div class="cm_input">
						<div class="profile"></div>

						<div class="input_b">
							<div class="ib_in">공개 댓글 추가…</div>
						</div>
					</div>

					<div class="cm_list">
						<ul v-for="i in comment_list">
							<li v-for="item in i.data.items">
								<div class="cm_user"></div>
								<div class="cm_tbox">
									<p class="nick">
										<span class="n_1">Yeon ‘s</span>
										<span class="n_2">5일 전</span>
									</p>
									<p class="cm_t">섹시 귀욤</p>
									<div class="cm_util">
										<span class="cu_1"><span class=""></span> 46</span>
										<span class="cu_2"><span class=""></span> 10</span>
										<button type="button">답글</button>
									</div>
									<div class="comm_view"><button type="button">답글보기</button></div>
								</div>
							</li>
							<!-- <li>
								<div class="cm_user"></div>
								<div class="cm_tbox">
									<p class="nick">
										<span class="n_1">kobo L</span>
										<span class="n_2">4일 전</span>
									</p>
									<p class="cm_t">블핑이 LA 콘서트를 매진시켜 3층까지 꽉채우고 공연할 줄이야...</p>
									<div class="cm_util">
										<span class="cu_1"><span class=""></span> 46</span>
										<span class="cu_2"><span class=""></span> 10</span>
										<button type="button">답글</button>
									</div>
									<div class="comm_view"><button type="button">답글보기</button></div>
								</div>
							</li>
							<li>
								<div class="cm_user"></div>
								<div class="cm_tbox">
									<p class="nick">
										<span class="n_1">ii ll</span>
										<span class="n_2">6일 전</span>
									</p>
									<p class="cm_t">퍼랠 윌리엄스, 해리 스타일스, 디제이 스네이크, 레이니, 베니 블랑코 등 유명 인사들 많이 와서 신기</p>
									<div class="cm_util">
										<span class="cu_1"><span class=""></span> 46</span>
										<span class="cu_2"><span class=""></span> 10</span>
										<button type="button">답글</button>
									</div>
									<div class="comm_view"><button type="button">답글보기</button></div>
								</div>
							</li>
							<li>
								<div class="cm_user"></div>
								<div class="cm_tbox">
									<p class="nick">
										<span class="n_1">이안</span>
										<span class="n_2">6일 전</span>
									</p>
									<p class="cm_t">텅텅콘이라 날조했던 것들 또 ㅂㄷㅂㄷ거리겠네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ갓블핑</p>
									<div class="cm_util">
										<span class="cu_1"><span class=""></span> 46</span>
										<span class="cu_2"><span class=""></span> 10</span>
										<button type="button">답글</button>
									</div>
									<div class="comm_view"><button type="button">답글보기</button></div>
								</div>
							</li> -->
							
						</ul>
					</div>
				</div>
			</div>

			<div class="v_aside">
				<div class="va_banner"></div>

				<div class="nb_list">
					<ul>
						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/e7ZMZ0uyewg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLAtMiUeeZEYoVhakmV_LG8Sy2obFw" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">관련 재생목록 - 블랙핑크] LA 콘서트 열광하는 현장 분위기, 해리 스타일스도 관람</p>
									<p class="nt_2">YouTube</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/6uN-8zoqZ3E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDomCvIwd3xPJLCaZlc6XQyo_ph7Q" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">들을수록 똑같은 환희 모창능력자 박민규의 '남자답게' ♪ -히든싱어3 15회</p>
									<p class="nt_2">JTBC Entertainment</p>
									<p class="nt_3">맞춤 동영상</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/RrrQbAo1M14/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCFMaBUdD2W9c1NKoXK-wXdINvTZg" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">세친구 레전드 정력왕 정웅인 [레전드 캐릭터]</p>
									<p class="nt_2">레전드캐릭터</p>
									<p class="nt_3">맞춤 동영상</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/d8BFubjIKn8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBTlUNkizqKRrCHJs0SCuwBnOmFWw" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">블랙핑크가 최단기간 월드 클래스로 성장한 이유는? [아이돌 알려줌] 블랙핑크 편 Explained BLACKPINK</p>
									<p class="nt_2">알려줌 팬질 (ALZ Fanzeel)</p>
									<p class="nt_3">조회수 29만회</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/e7ZMZ0uyewg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLAtMiUeeZEYoVhakmV_LG8Sy2obFw" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">관련 재생목록 - 블랙핑크] LA 콘서트 열광하는 현장 분위기, 해리 스타일스도 관람</p>
									<p class="nt_2">YouTube</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/6uN-8zoqZ3E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDomCvIwd3xPJLCaZlc6XQyo_ph7Q" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">들을수록 똑같은 환희 모창능력자 박민규의 '남자답게' ♪ -히든싱어3 15회</p>
									<p class="nt_2">JTBC Entertainment</p>
									<p class="nt_3">맞춤 동영상</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/RrrQbAo1M14/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCFMaBUdD2W9c1NKoXK-wXdINvTZg" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">세친구 레전드 정력왕 정웅인 [레전드 캐릭터]</p>
									<p class="nt_2">레전드캐릭터</p>
									<p class="nt_3">맞춤 동영상</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/d8BFubjIKn8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBTlUNkizqKRrCHJs0SCuwBnOmFWw" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">블랙핑크가 최단기간 월드 클래스로 성장한 이유는? [아이돌 알려줌] 블랙핑크 편 Explained BLACKPINK</p>
									<p class="nt_2">알려줌 팬질 (ALZ Fanzeel)</p>
									<p class="nt_3">조회수 29만회</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/e7ZMZ0uyewg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLAtMiUeeZEYoVhakmV_LG8Sy2obFw" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">관련 재생목록 - 블랙핑크] LA 콘서트 열광하는 현장 분위기, 해리 스타일스도 관람</p>
									<p class="nt_2">YouTube</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/6uN-8zoqZ3E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDomCvIwd3xPJLCaZlc6XQyo_ph7Q" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">들을수록 똑같은 환희 모창능력자 박민규의 '남자답게' ♪ -히든싱어3 15회</p>
									<p class="nt_2">JTBC Entertainment</p>
									<p class="nt_3">맞춤 동영상</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/RrrQbAo1M14/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCFMaBUdD2W9c1NKoXK-wXdINvTZg" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">세친구 레전드 정력왕 정웅인 [레전드 캐릭터]</p>
									<p class="nt_2">레전드캐릭터</p>
									<p class="nt_3">맞춤 동영상</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/d8BFubjIKn8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBTlUNkizqKRrCHJs0SCuwBnOmFWw" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">블랙핑크가 최단기간 월드 클래스로 성장한 이유는? [아이돌 알려줌] 블랙핑크 편 Explained BLACKPINK</p>
									<p class="nt_2">알려줌 팬질 (ALZ Fanzeel)</p>
									<p class="nt_3">조회수 29만회</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/e7ZMZ0uyewg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLAtMiUeeZEYoVhakmV_LG8Sy2obFw" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">관련 재생목록 - 블랙핑크] LA 콘서트 열광하는 현장 분위기, 해리 스타일스도 관람</p>
									<p class="nt_2">YouTube</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/6uN-8zoqZ3E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDomCvIwd3xPJLCaZlc6XQyo_ph7Q" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">들을수록 똑같은 환희 모창능력자 박민규의 '남자답게' ♪ -히든싱어3 15회</p>
									<p class="nt_2">JTBC Entertainment</p>
									<p class="nt_3">맞춤 동영상</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/RrrQbAo1M14/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCFMaBUdD2W9c1NKoXK-wXdINvTZg" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">세친구 레전드 정력왕 정웅인 [레전드 캐릭터]</p>
									<p class="nt_2">레전드캐릭터</p>
									<p class="nt_3">맞춤 동영상</p>
								</div>
							</a>
						</li>

						<li>
							<a href="javascript:void(0);">
								<div class="nb_thumb">
									<img src="https://i.ytimg.com/vi/d8BFubjIKn8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBTlUNkizqKRrCHJs0SCuwBnOmFWw" alt="">
								</div>
								<div class="nb_text">
									<p class="nt_1">블랙핑크가 최단기간 월드 클래스로 성장한 이유는? [아이돌 알려줌] 블랙핑크 편 Explained BLACKPINK</p>
									<p class="nt_2">알려줌 팬질 (ALZ Fanzeel)</p>
									<p class="nt_3">조회수 29만회</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
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

	.v_container{
		margin:56px 0 0 0;
		.v_inner {
			@include flex;
			justify-content:space-between;
			width:1280px;
			padding-top:24px;
			margin:0 auto;
			.v_section {
				width:854px;
				.t_line{
					padding:18px 0 18px 0;
					border-bottom:1px solid #e5e5e5;
					p.t_title {
						margin-bottom:6px;
						font-size:18px;
						line-height:28px;
					}
					.t_util {
						@include flex;
						justify-content:space-between;
						overflow:hidden;
						p {
							font-size:15px;
							color:#606060;
						}
						ul {
							@include flex;
							li {
								margin-left:15px;
								button {
									color:#909090;
								}
							}
						}
					}
				}
				.v_info {
					padding-bottom:20px;
					border-bottom:1px solid #e5e5e5;
					.ch_line {
						@include flex;
						justify-content:space-between;
						margin:20px 0;
						.ch_user {
							@include flex;
							-webkit-align-items:middle;
							align-items:center;
							.cu_thumb {
								width:48px;
								height:48px;
								background:#ddd;
								border-radius:100%;
							}
							.cu_info {
								margin-left:16px;
								p.ci_1 {
									a {
										color:#0a0a0a;
										font-size:14px;
									}
								}
								p.ci_2 {
									font-size:13px;
								}
							}
						}
						.subscription {
							button {
								height:39px;
								padding:0 15px;
								background:#f00;
								border-radius:2px;
								color:#fff;
							}
						}
					}
					.vi_text {
						margin:0 0 0 64px;
						p {
							color:#0a0a0a;
							font-size:14px;
							line-height:22px;
						}
						.vt_bb {
							margin-top:20px;
						}
					}
					.vi_btn {
						margin:20px 0 0 64px;
					}
				}
				.comment {
					padding-top:20px;
					.comm_h {
						margin-bottom:20px;
						span.comm_1 {
							margin-right:30px;
							font-size:16px;
						}
						span.comm_2 {
							button {
								font-size:14px;
								color:#606060;
							}
						}
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
								@include flex;
								margin-bottom:25px;
								.cm_user {
									width:40px;
									height:40px;
									background:#ddd;
									border-radius:100%;
								}
								.cm_tbox {
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
			}
			.v_aside {
				width:402px;
				.nb_list {
					ul {
						li {
							margin-bottom:8px;
							a {
								@include flex;
								justify-content:space-between;
								.nb_thumb {
									margin-right:10px;
									img {
										width:168px;
										height:94px;
									}
								}
								.nb_text {
									p.nt_1 {
										display:-webkit-box;
										-webkit-box-orient:vertical;
										overflow:hidden;
										text-overflow:ellipsis;
										white-space:normal;
										-webkit-line-clamp:2;
										font-size:14px;
									}
									p.nt_2 {
										margin:7px 0 3px 0;
										font-size:13px;
									}
									p.nt_3 {
										font-size:13px;
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
	export default {
		name: 'videoDetail',
	
		data (){
			return{
				save_left_navi_flag : false,
				v_data: '',
				comment_list: []
			}
		},
		created() {
			console.log('router', this.$router.history.current.params);
			this.v_data = this.$store.state.select_data;
			this.save_left_navi_flag = this.$store.state.left_toggle;
			this.$store.state.left_toggle = false;

			this.getComments();
		},
		destroyed(){
			this.$store.state.left_toggle = this.save_left_navi_flag;
		},
		computed:{
			
		},
		mounted(){
			this.commentList();
		},
		methods: {
			commentList(){
				var call_list = [];

				call_list.push(this.getComments());

				Promise.all(call_list).then((res)=>{
					console.log(res);
					this.comment_list = res;
				}).catch((err)=>{
					console.log(err);
				})
			},
			getComments(){
				return new Promise((resolve, reject)=>{
					this.$http.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${secret.youtubeKey}&textFormat=plainText&part=snippet&videoId=${this.v_data.id}&maxResults=10`)
					.then((res)=>{
						resolve(res);
					})
					.catch((err)=>{
						reject(err);
					});
					// https://www.googleapis.com/youtube/v3/commentThreads
				});
			}
		}

	}
</script>


