<template>
  <div id="app">
	  <headNavi></headNavi>
	  <viewV></viewV>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style lang="scss">

$linkColor:#464646;

body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, form, fieldset, p, button, select, input, textarea, th, td {margin:0; padding:0;}

body {background:#fafafa; font-family:Roboto, Arial, sans-serif; font-size:12px; color:$linkColor;}

img {border:none; vertical-align:top;}

ul li , ol li {list-style:none;}

fieldset {border:none;}

table {border-collapse:collapse;}
caption {display:none;}

img, fieldset, button {border:0; padding:0px;}
button {background:none;}
input, select {vertical-align:middle;}
legend {width:0; height:0; font-size:0; position:absolute; overflow:hidden;} 

button, input[type="button"], input[type="submit"], input[type="image"] {cursor:pointer; outline:none;}

a {color:$linkColor; text-decoration:none; cursor:pointer;
	&:link {color:$linkColor;}
	&:visited {color:$linkColor;}
	&:active {color:$linkColor;}
	&:hover {color:$linkColor;}
}

</style>

<script>
import headNavi from '@/components/header.vue'
import leftNavi from '@/components/leftNavi.vue'
import container from '@/components/container.vue'
import search from '@/components/search.vue'
import viewV from '@/components/view.vue'
export default {
	components:{
		headNavi,
		leftNavi,
		container,
		search,
		viewV
	}
}
</script>
