// WebGLRender
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 30 );
camera.lookAt( 0, 0, 20 );
// scene
const scene = new THREE.Scene();
// material
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// vectors
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
// geometry
const geometry = new THREE.BufferGeometry().setFromPoints( points );
// line
const line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );


































// const scene = new THREE.Scene()
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// const canvas = document.querySelector('canvas.webgl')
// scene.background = new THREE.Color( 0xffffff )
// scene.add(mesh)
//
// const sizes = {
//     width: 800,
//     height: 600
// }
//
//
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
// scene.add(camera)
//
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
//
// function render() {
//         requestAnimationFrame( render );
//   // mesh.rotation.x += 0.01;
//   // mesh.rotation.y += 0.01;
//   renderer.render( scene, camera );
// }
// render();
