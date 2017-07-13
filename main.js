// new Vue({
// 	el: '#app',
// 	data: {
// 		title: 'Hello hello',
// 		link: 'http://google.com',
// 		finishedLink: '<a href="http://google.com">Google link</a>'
// 	},
// 	methods: {
// 		sayHello: function() {
// 			this.title = 'Hello'
// 			return this.title;
// 		}
// 	}
// });

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