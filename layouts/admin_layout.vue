<template>
	<div class="wrapper container">
		<div class="row">
			<div class="nuxt-link-wrapper col-sm-12 col-md-8 col-lg-8">
				<nuxt />
			</div>
			<div class="dashboard-wrapper col-sm-12 col-md-4 col-lg-4">
				<dashboard></dashboard>
			</div>
		</div>
	</div>
</template>
<script>
import dashboard from '@/components/dashboard.vue';
export default {
	components: {
		dashboard,
	},
};
</script>
<style scoped>
.dashboard-wrapper {
	border: 3px solid red;
}
.nuxt-link-wrapper {
	border: 3px solid blue;
}
</style>
