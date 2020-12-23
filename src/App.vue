<template>
	<div id="app">
		<div id="nav">
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
// import Home from './views/Home'
	export default {
		name: 'App',
		components: {},

	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
