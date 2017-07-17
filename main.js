// new Vue({
// 	el: '#app',
// 	data: {
// 		attachRed: false,
// 		color: 'green'
// 	},
// 	computed: {
// 		divClass: function() {
// 			return {
// 				red: this.attachRed,
// 				blue: !this.attachRed
// 			};
// 		}
// 	}
// });
new Vue({
	el: '#app',
	data: {
		color: 'gray',
		width: 100
	},
	computed: {
		myStyle: function() {
			return {
				backgroundColor: this.color,
				width: this.width + 'px'
			};
		}
	}
});