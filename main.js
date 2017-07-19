new Vue({
  el: '#exercise4',
  data: {
  	attachEffect: {
  		highlight: true,
  		shrink: false
  	},
  	color: 'blue',
  	height: 60,
  	userClass: '',
  	isVisible: true,
  	myStyle: {
  		width: '50px',
  		height: '100px',
  		backgroundColor: 'yellow'
  	},
  	progressBar: {
  		width: '200px',
  		height: '30px',
  		border: '1px solid black'
  	},
  	progressBarGrow: {
  		width: '0px',
  		backgroundColor: 'yellow'
  	},
  	finalClass: ''
  },
  methods: {
    // startEffect: function() {
    // 	this.finalClass = "highlight"
    // 	setInterval(function() {
    // 		if (this.finalClass == "highlight") {
    // 			this.finalClass = "shrink"
    // 		} else {
    // 			this.finalClass = "highlight"
    // 		}
    // 	}.bind(this), 3000)
    // }
    startEffect: function() {
    	var vm = this;
    	setInterval(function(){
    		vm.attachEffect.highlight = !vm.attachEffect.highlight;
    		vm.attachEffect.shrink = !vm.attachEffect.shrink;
    	}, 500)
    },
    startProgress: function() {
    	var vm = this;
    	var width = 0;
    	setInterval(function() {
    		width = width + 10;
    		vm.progressBarGrow.width = width + 'px'
    	}, 1000)
    }
  }
  // computed: {
  // 	myStyle: function() {
  // 		return {
  // 			height: this.height + 'px'
  // 		}
  // 	}
  // }
});

// new Vue({
// 	el: '#app',
// 	data: {
// 		color: 'gray',
// 		width: 100
// 	},
// 	computed: {
// 		myStyle: function() {
// 			return {
// 				backgroundColor: this.color,
// 				width: this.width + 'px'
// 			};
// 		}
// 	}
// });