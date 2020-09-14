<template>
	<div id="header" class="w3-container gradient1 w3-theme-d1" :elevation="18">
		This Living Rosary Apostolate
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.hideHeaderBtn {
	display: none;
}
.showHeaderBtn {
	display: fixed;
	z-index: 50;
	top: 10px;
	right: 10px;
}
#header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 25;
	width: 100%;
	text-align: start;
	line-height: 60px;
	height: 60px;
	font-size: 24px;
	text-align: start;
}
#headerTextSmall {
	line-height: 40px;
	height: 40px;
	font-size: 18px;
	text-align: start;
	vertical-align: middle;
}
</style>
