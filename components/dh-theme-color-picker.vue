<template>
	<div id="dh-controls">
		<div id="dh-theme-pick-primary">
			<label for="dh-prime">Primary Color:</label>
			<input type="color" id="dh-prime" ref="primein" />
		</div>
		<div id="dh-theme-pick-accent">
			<label for="dh-accet">Accent Color:</label>
			<input type="color" id="dh-accent" />
		</div>
		<div id="color-history">
			<div class="dh-previous-primary"></div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	computed: {
		primary: function() {
			return this.$refs.value;
		},
	},
};
</script>
<style scoped>
#dh-controls {
	width: 250px;
	line-height: 40px;
	top: 10px;
	right: 10px;
	background: #fff;
	color: #101010;
	position: fixed;
	z-index: 1000;
}
</style>
