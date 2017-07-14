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

new Vue({
	el: '#exercise',
	data: {
		name: 'Karolina',
		age: 28,
		imgLink: 'http://royalwholesalecandy.com/media/catalog/category/chocolate_3.jpg'
	},
	methods: {
		multipleAge: function() {
			return this.age*3;
		},
		random: function() {
			return Math.random();
		}

	}
});
new Vue({
	el: '#listeningEvents',
	data: {
		counter: 0,
		x: 0,
		y: 0
	},
	methods: {
		increase: function(step, event) {
			this.counter += step;
		},
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		alertMe: function() {
			alert('Alert!');
		}
		// dummy: function(event) {
		// 	event.stopPropagation();
		// }
	}
});