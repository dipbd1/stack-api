<template>
	<div class="home">
		<h1>StackOverflow API implementation</h1>
		<button @click="authenticate2">Click Here to Authenticate the App</button>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {},
		mounted() {
			// console.log('Hello There');
			// console.log(window.SE);
			// console.log(process.env.VUE_APP_API_URL);
			// 'https://api.stackexchange.com/2.2/questions'
			// console.log(this.$route);
			// if (this.$route.query.code) {
			// 	localStorage.setItem('code', this.$route.query.code)
			// 	console.log(localStorage.getItem('code'))
			// 	this.axios
			// 		.post('https://stackoverflow.com/oauth/access_token', {
			// 			client_id: process.env.VUE_APP_CLIENT_ID,
			// 			client_secret: process.env.VUE_APP_CLIENT_SECRET,
			// 			code: this.$route.query.code,
			// 			redirect_uri: process.env.VUE_APP_NGROK_URL,
			// 		})
			// 		.then((data) => {
			// 			console.log('redirectData ' + data);
			// 		});
			// }
		},
		methods: {
			authenticate() {
				window.location.href = `https://stackoverflow.com/oauth?client_id=${process.env.VUE_APP_CLIENT_ID}&scope=no_expiry&redirect_uri=${process.env.VUE_APP_NGROK_URL}`;
			},
			authenticate2() {
				window.SE.init({
					clientId: process.env.VUE_APP_CLIENT_ID,
					key: process.env.VUE_APP_CLIENT_KEY,
					channelUrl: 'https://cf1d7d2de487.ngrok.io/blank',
					complete: function(data) {
						console.log(data);
					},
				});
				window.SE.authenticate({
					success: function(data) {console.log(data)},
					error: function(data) {console.log(data)},
					scope: ['no_expiry'],
					networkUsers: true,
				});
			},
		},
		created() {},
	};
</script>
