var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var planoGeometry = new THREE.BoxGeometry(4, 0.1, 4);
var materialPlano = new THREE.MeshBasicMaterial({color: 0x00ff00});
var plano = new THREE.Mesh(planoGeometry, materialPlano);
scene.add(plano);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0xff0000});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material2 = new THREE.MeshBasicMaterial({color: 0x00ffff});
var cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube2);

var geometrySquare = new THREE.BoxGeometry(0.5, 8, 0.5);
var materialSquare = new THREE.MeshBasicMaterial({color: 0xffff00});
var square = new THREE.Mesh(geometrySquare, materialSquare);
scene.add(square);

// var materialLine = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// var geometry = new THREE.Geometry();
// geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
// geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
// geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

// var line = new THREE.Line( geometry, materialLine );
// scene.add(line);

camera.position.z = 20;

var animate = function() {
    requestAnimationFrame(animate);
    
    let counter;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01; 
    
    cube.position.x += 0.01;
    cube2.position.x += 0.01;   

    square.position.set(10, 4, 0);

    plano.scale.set(4, 4, 4);

    renderer.render(scene, camera);
};

animate();