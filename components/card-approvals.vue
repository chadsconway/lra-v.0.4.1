<template>
	<div>
		<div class="approval-card ">
			<b-card-group deck>
				<b-card text-variant="dark" class="text-center">
					<template v-slot:header>
						<h3>{{ author }}</h3>
					</template>
					<b-card-text> {{ church }}, {{ location }} </b-card-text>
					<!-- <a v-bind:href="pdfurl" target="_blank">open pdf</a> -->
					<nuxt-link
						v-bind:to="`${pdfurl}`"
						class="btn btn-primary text-white hover p-2 mb-1"
						target="_blank"
					>
						Open Letter
					</nuxt-link>
				</b-card>
			</b-card-group>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		author: String,
		church: String,
		location: String,
		pdfurl: String,
	},
	methods: {
		openPDF: function(event) {
			console.log('button clicked');
			console.log(`Event ${event}`);
			this.$router.push(this.pdfurl);
		},
	},
};
</script>

<style scoped></style>
