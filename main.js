new Vue({
	el: '#app',
	data: {
		title: 'Hello hello'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});