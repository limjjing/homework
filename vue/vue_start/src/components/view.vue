<template>
	
	<div class="v_container">
		<div class="v_inner">
			<div class="v_section">
				<div class="player">
					<img src="../images/player_sample.png" alt="">
				</div>

				<div class="t_line">
					<p class="t_title">블랙핑크] LA 콘서트 열광하는 현장 분위기, 해리 스타일스도 관람</p>
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
						</ul>
					</div>
				</div>

				<div class="v_info">
					<div class="ch_line">
						<div class="ch_user">
							<div class="cu_thumb"></div>
							<div class="cu_info">
								<p class="ci_1"><a href="javascript:void(0);">치킨먹고가</a></p>
								<p class="ci_2">게시일: 2019. 4. 19.</p>
							</div>
						</div>
						<div class="subscription">
							<button type="button">구독 3.8천</button>
						</div>
					</div>

					<div class="vi_text">
						<p>이 동영상은 2019.4.17 블랙핑크 LA 콘서트 열광하는 현장 분위기를 팬캠 위주로 재구성했습니다. 
						로스엔젤레스 공연 현장은 3층까지 관람객으로 가득 차 열기가 아주 뜨거웠습니다. 
						특히 이날 '해리 스타일스'가 객석에서 관람하는 모습이 발견되어 사진이 소셜미디어에 올려지고, 나중에 해리 스타일스도 인정하기도 했습니다. 
						2019.4.17 밤 블랙핑크는 미국 LA를 시작으로 본격적인 북미 투어에 들어갔습니다. 블랙핑크는 19일(한국 시각 20일)에는 미국 최대 음악 축제인 '코첼라 페스티벌' 2주차 무대에 오릅니다. 24일 시카고, 27일 해밀턴, 5.1일 뉴어크, 5일 애틀랜타, 8일 포트워스 등 2019 월드투어로 아시아, 북미, 유럽, 오세아니아 등 세계 4대륙 22개 도시에서 29회 공연을 합니다. <br><br>

						블랙핑크, LA 콘서트 뜨거운 현장 분위기, 해리 스타일스도 관람해</p>
						<div class="vt_bb">
							<span class="">카테고리</span>
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
						<ul>
							<li>
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
						</ul>
					</div>
				</div>
			</div>

			<div class="v_aside">
				<div class="va_banner"></div>

				<div class="nb_list"></div>
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
			}
		}
	}
	
</style>

<script>

</script>