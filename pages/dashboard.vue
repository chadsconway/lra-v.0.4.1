<template>
	<div class="wrapper">
		<div class="nav">
			<button v-bind:click="navToHome" class="nav-tag">home</button>
			<button v-bind:click="navToApprovals(event)" class="nav-tag">
				approvals
			</button>
			<button class="nav-tag">donate</button>
			<button class="nav-tag">founders</button>
			<button class="nav-tag">history</button>
			<button class="nav-tag">how</button>
			<button class="nav-tag">join</button>
		</div>
		<div class="page-details">
			<b-card
				border-variant="primary"
				footer-bg-variant="primary"
				text-variant="primary"
				><span>{ this.$route.path }</span></b-card
			>
		</div>
	</div>
</template>
<script>
export default {
	layout: 'admin_layout',
	data() {
		return {
			currpage: 'none',
		};
	},
	methods: {
		navToHome(event) {
			console.log(event);
		},
		navToApprovals(event) {
			console.log(event);
		},
	},
};
</script>
<style>
.wrapper {
	display: flexbox;
	flex-direction: column;
	flex-wrap: no-wrap;
	justify-content: space-evenly;
}
.nav {
	display: flexbox;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
}
.nav-tag {
	flex: 1 0 1;
	align-self: flex-start;
}
</style>
