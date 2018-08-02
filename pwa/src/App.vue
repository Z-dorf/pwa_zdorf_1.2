<template>
  <div id="app">
    <menu-header></menu-header>
    <router-view/>
  </div>
</template>

<script>

import MenuHeader from './components/MenuHeader'  

export default {
  name: 'App',
  components: {
    MenuHeader,
  },
}
</script>



<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
	}
	#home{
		background-color: #fff;
	}
	#projets{
		background-color: #fff;
	}
	#contact_form{
		background-color: #fff;
	}

/* ul{

} */


  body {
	width: 100%;
	height: 90%;
	color: #fff;
	background: #0B132B;
	background-size: 400% 400%;
	background-repeat: no-repeat;
	/* background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB); */
	/* -webkit-animation: Gradient 15s ease infinite; */
	/* -moz-animation: Gradient 15s ease infinite; */
	/* animation: Gradient 15s ease infinite; */
}
.contact_logo{
	height: 35%;
	width: 35%;
}
.logo{
	height: 10%;
	width: 10%;
}
.router-link-active:hover {
	color: #FFD500;
}
/* isActiv {
		color: #FFD500;
} */

/* @-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
} */

/* @-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
} */

/* @keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
} */
</style>
