<template>
	<div id="mainMedia" >     
        <div class="thumbnail"><img src="https://i.ytimg.com/vi/feLZG5bAHnM/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLArbYsTrNVhgdrdE-mi9yGSavoKZQ" alt=""></div>
        <div class="vt_line">
            <p class="v_title">{{media_data.snippet.title}}</p>
            <p class="v_channel">SPOTV 체육볶음</p>
            <p class="v_info">
                <span>조회수 22만회</span>
                <span>18시간 전</span>
            </p>
        </div>   
	</div>
</template>

<style lang="scss" scoped>


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
  
	data: function (){
        return{

	    }
	},
	mounted(){

	},
	watch: {

	}
}
</script>
