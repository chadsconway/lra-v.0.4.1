<template>
	<b-container>
		<div max-height="450px">
			<v-img
				src="img/still_from_video.png"
				height="100%"
				:aspect-ratio="3 / 1"
			></v-img>
		</div>
		<video-frame-2 />
	</b-container>
</template>

<script>
import videoFrame2 from '@/components/video-frame-2';
export default {
	transition: {
			duration: 500,
		enterActiveClass: 'animated fadeIn',
		leaveActiveClass: 'animated fadeOut',
	},
	components: {
		videoFrame2,
	},
};
</script>

<style scoped></style>
