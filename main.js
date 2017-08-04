var data = {
	title: 'The VueJS Instance',
    showParagraph: false
}

var vm1 = new Vue({
  el: '#app',
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