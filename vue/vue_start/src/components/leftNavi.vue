<template>
	<div id="leftNavi">
		<div class="ln_blank"></div>
		<div class="ln_inner">
			<div class="ln_lb ln_1">
				<ul>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">홈</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">인기</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">구독</span></a></li>
				</ul>
			</div>
			<div class="ln_lb">
				<p><a href="javascript:void(0);">라이브러리</a></p>
				<ul>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">최근 본 동영상</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">나중에 볼 동영상</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">좋아요 표시한 동영상</span></a></li>
				</ul>
			</div>
			<div class="ln_lb">
				<p><a href="javascript:void(0);">구독</a></p>
				<ul>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">YouTube 인기</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">음악</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">스포츠</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">게임</span></a></li>
				</ul>
			</div>
			<div class="ln_lb">
				<p>YouTube 더보기</p>
				<ul>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">YouTube Premium</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">YouTube 영화</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">게임</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">실시간</span></a></li>
				</ul>
			</div>
			<div class="ln_lb">
				<ul>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">설정</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">신고 기록</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">고객센터</span></a></li>
					<li><a href="javascript:void(0);"><span class="ln_ic"></span><span class="ln_text">의견 보내기</span></a></li>
				</ul>
			</div>

			<div class="ln_foot">
				<ul>
					<li><a href="javascript:void(0);">정보</a></li>
					<li><a href="javascript:void(0);">프레스</a></li>
					<li><a href="javascript:void(0);">저작권</a></li>
					<li><a href="javascript:void(0);">문의하기</a></li>
					<li><a href="javascript:void(0);">크리에이터</a></li>
					<li><a href="javascript:void(0);">광고</a></li>
					<li><a href="javascript:void(0);">개발자</a></li>
				</ul>
				<ul>
					<li><a href="javascript:void(0);">이용약관</a></li>
					<li><a href="javascript:void(0);">개인정보 보호</a></li>
					<li><a href="javascript:void(0);">정책 및 안전</a></li>
					<li><a href="javascript:void(0);">새로운 기능 테스트하기</a></li>
				</ul>
				<p class="copy">© 2019 YouTube, LLC</p>
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

	@mixin flexColumn {
		display:flex;
		-ms-flex-direction:column;
		-webkit-flex-direction:column;
		flex-direction:column;
	}

	#leftNavi {
		@include flexColumn;
		position:fixed;
		top:0;
		left:0;
		width:240px;
		height:100%;
		.ln_blank {
			margin-top:56px;
		}
		.ln_inner {
			@include flexColumn;
			overflow-y:scroll;
			height:100%;
			background:#f5f5f5;
			.ln_lb {
				padding:8px 0;
				
				border-bottom:1px solid #dcdcdc;
				p {
					padding:8px 24px;
					color:#6c6c6c;
					font-size:14px;
					a {
						color:#6c6c6c;
						font-size:14px;
						&:hover {
							color:#0a0a0a;
						}
					}
				}
				ul {
					li {
						height:40px;
						padding:0 24px;
						span.ln_ic {
							display:block;
							float:left;
							width:24px;
							height:24px;
							margin:8px 24px 0 0;
							background:#c4c4c4;
							border-radius:100%;
						}
						span.ln_text {
							display:block;
							overflow:hidden;
							text-overflow:ellipsis;
							white-space:nowrap;
							color:#0a0a0a;
							font-size:14px;
							line-height:39px;
						}
					}
				}
			}
			.ln_1 {
				padding:12px 0;
			}
			.ln_foot {
				padding:16px 24px 20px 24px;
				ul {
					overflow:hidden;
					margin-bottom:12px;
					li {
						float:left;
						margin-right:8px;
						a {
							font-size:13px;
						}
					}
				}
				p.copy {
					margin-top:30px;
				}
			}
		}

	}
</style>

<script>

export default {
  name: 'leftNavi',
  
  data: ()=>{
	  return{
		toggle: "true"
	  }
  },
  created(){
	this.eventBus.$on('leftToggle', function(flag) {
    	this.toggle = flag;
	});
  },
  watch: {
    toggle: function (val) {
      if(val){
		  console.log("left nav on");
	  }else{
		  console.log("left nav false");
	  }
    }
  },
  methods: {
	  test: ()=>{
		  console.log('asdfasdf');
	  }
  },
  
}
</script>
