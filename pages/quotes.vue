<template>
	<div class="quotes-wrapper">
		<h1 v-if="loading">Loading...</h1>
		<div v-else>
			<h1>Loaded</h1>
			<div class="quotes-div" v-for="quote in quotesList">
				<b-card>
					<b-card-text>
						{{ quote }}
					</b-card-text>
				</b-card>
			</div>
		</div>
	</div>
</template>
<script>
import store from '../store/index.js';
export default {
	computed: {
		loading() {
			return this.$store.getters.getLoading;
		},
		quotesList() {
			return this.$store.getters.getQuotes;
		},
	},
	created() {
		this.$store.dispatch('fetchQuotes');
	},
};
</script>
<style></style>
