<template>
	<v-card dark>
		<v-toolbar color="primary">
			<v-switch
				v-model="$vuetify.theme.primary"
				inset
				label="Theme Primary"
			></v-switch>
		</v-toolbar>
		<v-card-text class="display-1">Theme Controls</v-card-text>
	</v-card>
</template>
<script>
export default {
	data() {
		return {
			primary: '#1976d2',
		};
	},
};
</script>
<style scoped0>
body {
	background-color: black;

	--primary: '#1976D2';
	--secondary: '#424242';
	--accent: '#82B1FF';
	--error: '#FF5252';
	--info: '#2196F3';
	--success: '#4CAF50';
	--warning: '#FFC107';
}
</style>
