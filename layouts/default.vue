<template>
	<div>
		<MobileAppBar
			v-if="sideNavIsHid"
			class="d3"
			id="mobileHeader"
		></MobileAppBar>
		<Header v-else id="header"> </Header>
		<Sidenav v-bind:class="{ hideSideNav: sideNavIsHid }" />
		<div v-bind:class="{ padForSideNav: !sideNavIsHid }" id="main">
			<nuxt />
		</div>
	</div>
</template>
<script>
import Header from '@/components/header';
import ClientControls from '@/components/client-controls.vue';
import Footer from '@/components/footer';
import Sidenav from '@/components/sidenav';
import MobileBottomNav from '@/components/mobile_bottom_nav';
import MobileAppBar from '@/components/mobile_app_bar.vue';
import fab from '@/components/fab';
import themeColors from '@/components/theme-colors.vue';
export default {
	data() {
		return {
			sideNavIsHid: true,
			showDesktop: false,
		};
	},
	mounted() {
		this.onResize();
		window.addEventListener('resize', this.onResize, { passive: true });
	},
	methods: {
		onResize() {
			if (window.innerWidth < 600) {
				this.sideNavIsHid = true;
			} else {
				this.sideNavIsHid = false;
			}
		},
	},
	components: {
		Header,
		ClientControls,
		Footer,
		Sidenav,
		MobileBottomNav,
		MobileAppBar,
		fab,
	},
};
</script>
<style scoped>
#main {
	padding-top: 50px;
	padding-bottom: 60px;
}
.padForSideNav {
	padding-left: 60px;
	padding-top: 60px;
}
.isDesktop {
	display: visible;
}
#header {
	height: 60px;
}
#mobileHeader {
	height: 40px;
}
</style>
