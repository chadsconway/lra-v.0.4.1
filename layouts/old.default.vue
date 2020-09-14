<template>
	<div id="app">
		<v-app>
			<fab></fab>

			<Header />

			<Sidenav v-bind:class="{ hideSideNav: sidenavIsHid }" />
			<div class="contwrap dh-bg">
				<nuxt />
			</div>
			<MobileBottomNav />

			<!-- <Footer /> -->
		</v-app>
	</div>
</template>
<script>
import Header from '@/components/header';
import ClientControls from '@/components/client-controls.vue';
import Footer from '@/components/footer';
import Sidenav from '@/components/sidenav';
import MobileBottomNav from '@/components/mobile_bottom_nav';
import MobileAppBar from '@/components/mobile_app_bar';
import fab from '@/components/fab';
export default {
	data() {
		return {
			sidenavIsHid: false,
		};
	},
	components: {
		fab,
		Header,
		Footer,
		Sidenav,
		MobileBottomNav,
		MobileAppBar,
		ClientControls,
	},
	mounted() {
		this.onResize();
		window.addEventListener('resize', this.onResize, { passive: true });
	},
	methods: {
		onResize() {
			if (window.innerWidth < 600) {
				this.sidenavIsHid = true;
			} else {
				this.sidenavIsHid = false;
			}
		},
	},
};
</script>
<style scoped>
.contwrap {
	position: inline;
	padding-top: 60px;
	width: 100%;
}
a:hover {
	color: #007977;
}
.dh-bg {
	background-color: white;
}

.shrinkfab {
	position: fixed;
	bottom: 10px;
	right: 10px;
}
.slideOver {
	margin-left: 200px;
}

.startPos {
	margin-left: 60px;
}

.hideSideNav {
	display: none;
}
</style>
