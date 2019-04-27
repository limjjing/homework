<template>
	<div id="mainMedia" >     
        <div class="thumbnail"><img :src="media_data.snippet.thumbnails.high.url" alt=""></div>
        <div class="vt_line">
            <p class="v_title">{{media_data.snippet.title}}</p>
            <p class="v_channel">{{media_data.snippet.channelTitle}}</p>
            <p class="v_info">
                <span>조회수 22만회</span>
                <span>18시간 전</span>
            </p>
        </div>   
	</div>
</template>

<style lang="scss" scoped>

@mixin oneline {
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}

@mixin fontS1 {
	font-size:16px;
	line-height:20px;
}

.list_line {
	border-bottom:1px solid #e1e1e1;
	.lt_line {
		overflow:hidden;
		position:relative;
		p.ll_title {
			margin:24px 0 24px 0;
			a {
				@include fontS1;
			}
			img.ch_img {
				width:32px;
				height:32px;
				margin:-6px 8px 0 0;
				border-radius:100%;
			}
			span.lt_1 {
				@include fontS1;
			}
			span.lt_s {
				margin-left:10px;
				color:#606060;
				font-size:13px;
			}
		}
		a.subscription {
			display:block;
			position:absolute;
			top:15px;
			right:0;
			height:39px;
			padding:0 18px;
			background:#ff0000;
			border-radius:2px;
			span {
				font-size:14px;
				line-height:39px;
			}
			span.lt_t1 {
				color:#fff;
			}
			span.lt_t2 {
				margin-left:8px;
				color:#e2e2e2;
			}
		}
	}
	ul {
		overflow:hidden;
		margin-bottom:26px;
		li {
			float:left;
			width:210px;
			margin-right:4px;
			.thumbnail {
				img {
					display:block;
					width:210px;
					height:118px;
				}
			}
			.vt_line {
				padding-right:24px;
				p.v_title {
					display:-webkit-box;
					-webkit-box-orient:vertical;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:normal;
					-webkit-line-clamp:2;
					margin:10px 0;
					font-size:14px;
					font-weight:500;
					line-height:17px;
				}
				p.v_channel {
					@include oneline;
					margin-bottom:2px;
				}
				p.v_info {
					@include oneline;
				}
			}
		}
	}
	.more_link {
		margin-bottom:26px;
		font-size:13px;
	}
}

</style>

<script>

export default {
    name: 'mainMedia',
    
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
