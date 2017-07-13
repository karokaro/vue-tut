new Vue({
	el: '#app',
	data: {
		title: 'Hello hello',
		link: 'http://google.com',
		finishedLink: '<a href="http://google.com">Google link</a>'
	},
	methods: {
		sayHello: function() {
			this.title = 'Hello'
			return this.title;
		}
	}
});