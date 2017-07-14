new Vue({
    el: '#exercise2',
    data: {
        value: ''
    },
    methods: {
    	alert: function() {
    		alert('The button was clicked!');
    	},
    	storeValue: function(event) {
    		this.value = event.target.value;
    	}
    }
});