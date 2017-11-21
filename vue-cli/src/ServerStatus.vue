<template>
	<div>
		<p>Server Status: {{ status }}</p>
		<button @click="changeStatus">Change status</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function() {
		  	return {
		  		status: 'Critical'
		  	}
		},
		methods: {
			changeStatus() {
		  		this.status = 'Normal';
		  	}
		}
	}
</script>