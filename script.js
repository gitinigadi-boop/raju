// ==============================
// 3D HEART PARTICLE ANIMATION
// Part - 1
// ==============================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 35;

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.getElementById("container").appendChild(renderer.domElement);

const particles = 3000;

const geometry = new THREE.BufferGeometry();

const positions = new Float32Array(particles * 3);

for (let i = 0; i < particles; i++) {

    let t = Math.random() * Math.PI * 2;

    let x = 16 * Math.pow(Math.sin(t), 3);

    let y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

}

geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({

    color: 0xff3366,

    size: 0.22,

    transparent: true,

    opacity: 0.9

});

const heart = new THREE.Points(
    geometry,
    material
);

scene.add(heart);
