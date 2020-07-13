<template>
	<div>
		<div max-height="450px" class="toppicdiv">
			<v-img
				src="img/still_from_video.png"
				width="100vw"
				:aspect-ratio="3 / 1"
			></v-img>
		</div>
		<b-container class="topbcont">
			<video-frame-2 />
		</b-container>
	</div>
</template>

<script>
import videoFrame2 from '@/components/video-frame-2';
import dhThemeColorPicker from '@/components/dh-theme-color-picker';
export default {
	transition: {
		duration: 500,
		enterActiveClass: 'animated fadeIn',
		leaveActiveClass: 'animated fadeOut',
	},
	components: {
		videoFrame2,
		dhThemeColorPicker,
	},
};
</script>

<style scoped>
.toppicdiv {
	margin-top: -15px;
	width: 100%;
}
.bhcont {
	background-color: white;
}
</style>
