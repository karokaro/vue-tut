var data = {
	title: 'The VueJS Instance',
    showParagraph: false
}

Vue.component('hello', {
	template: '<h1>Hellllooo!</h1>'
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      //console.log(this.$refs);
      this.$refs.myButton.innerText = 'New text for button';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app');

setTimeout(function() {
	vm1.title = 'Changed by timer yeah!';
	vm1.show();
}, 4000);

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second VueJS Instance',
    showParagraph: false
  },
  methods : {
  	changeSth: function() {
  		vm1.title = 'Changed!'
  	}
  }
});

var vm3 = new Vue({
	template: '<h1>Heeelllooooo!</h1>'
});

//vm3.$mount('app3');
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);
