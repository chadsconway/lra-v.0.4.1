<template>
	<div class="contwrap">
		<b-container>
			<b-row align-h="center">
				<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
					<embed
						height="500"
						src="https://www.gofundme.com/f/this-living-rosary-apostolate/widget/large"
					></embed>
					
        </b-col>
				<theme-colors />
			</b-row>
		</b-container>
		
	</div>
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
			themeColors
		}
	};
</script>

<style scoped>
  embed {
    width: 100%;
  }

	embed:focus {
    outline: none;
  }
 
  
</style>
