var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
	camera = new THREE.PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		0.01,
		10
	);
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
	material = new THREE.MeshNormalMaterial();

	geometry2 = new THREE.SphereGeometry(2, 32, 32);

	material2 = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
	mesh2 = new THREE.Mesh(geometry2, material2);
	var group = new THREE.Group();
	group.add(mesh2);
	scene.add(group);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function animate() {
	requestAnimationFrame(animate);
	group.position.x += 0.01;
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render(scene, camera);
}
