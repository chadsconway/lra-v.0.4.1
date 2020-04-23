<template>
	<b-container>
		<b-row align-h="center">
			<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
				<b-card
					bg-variant="dark"
					text-variant="white"
					title="Protector of This Living Rosary Apostolate"
				>
				</b-card>
				<b-card
					img-top
					img-src="/img/arborelius.jpg"
					bg-variant="dark"
					text-variant="white"
					class="text-large"
				>
					Anders Cardinal Arborelius O.C.D., <br />
				</b-card>
				<b-card
					img-top
					img-src="/img/founders.jpg"
					bg-variant="dark"
					text-variant="white"
				>
					<b-card-text
						>Glenda & Roger LaFleur Olsson, Genevieve Mamai, Frank & Trudy
						Bonack</b-card-text
					></b-card
				>
				<b-card
					height="380px"
					img-top
					img-src="/img/rogerlafleur.jpg"
					bg-variant="dark"
					text-variant="white"
				>
					<b-card-text>Roger LaFleur</b-card-text>
				</b-card>
				<b-card
					img-top
					img-src="/img/glendalafleur.jpg"
					bg-variant="dark"
					text-variant="white"
					><b-card-text>Glenda LaFleur</b-card-text></b-card
				>
				<b-card
					img-top
					img-src="/img/franktrudy.jpg"
					bg-variant="dark"
					text-variant="white"
				>
					<b-card-text>Frank and Trudy Bonack</b-card-text>
					<b-button href="/" variant="primary">Back</b-button>
				</b-card>
			</b-col>
		</b-row>
		<theme-colors />
	</b-container>
</template>

<script>
import themeColors from '@/components/theme-colors.vue';
export default {
	transition: {
		duration: 500,
		enterActiveClass: 'animated fadeIn',
		leaveActiveClass: 'animated fadeOut',
	},
	components: {
		themeColors,
	},
};
</script>

<style scoped></style>
