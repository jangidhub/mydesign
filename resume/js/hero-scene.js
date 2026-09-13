/**
 * Minimal Three.js hero scene: a single floating glass-like polyhedron with
 * a wireframe shell, lit softly, rotating slowly and reacting to
 * pointer/scroll. Falls back to a static CSS gradient orb when WebGL is
 * unavailable, on very small/low-power devices, or when the visitor has
 * requested reduced motion.
 */

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function supportsWebGL() {
  try {
    var canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
  } catch (e) {
    return false;
  }
}

function showFallback() {
  var orb = document.getElementById("heroFallbackOrb");
  var canvas = document.getElementById("hero-canvas");
  if (canvas) canvas.style.display = "none";
  if (orb) orb.style.display = "block";
}

async function init() {
  var canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  var isMobile = window.innerWidth < 760;
  var reduceMotion = prefersReducedMotion();

  if (!supportsWebGL()) {
    showFallback();
    return;
  }

  var THREE;
  try {
    THREE = await import("https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js");
  } catch (e) {
    showFallback();
    return;
  }

  var wrap = canvas.parentElement;
  var width = wrap.clientWidth;
  var height = wrap.clientHeight;

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
  } catch (e) {
    showFallback();
    return;
  }

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 0, 9);

  // Lighting — restrained, a key light + soft fill, no color noise.
  var key = new THREE.DirectionalLight(0xffffff, 2.1);
  key.position.set(4, 5, 6);
  scene.add(key);

  var fill = new THREE.DirectionalLight(0x4da3ff, 0.7);
  fill.position.set(-5, -2, 3);
  scene.add(fill);

  var ambient = new THREE.AmbientLight(0x404040, 1.1);
  scene.add(ambient);

  // Core object: an icosahedron, physically-based glass-ish material,
  // with a slightly larger wireframe shell for definition.
  var detail = isMobile ? 0 : 1;
  var geometry = new THREE.IcosahedronGeometry(2.1, detail);
  var material = new THREE.MeshPhysicalMaterial({
    color: 0x0a0a0a,
    metalness: 0.15,
    roughness: 0.22,
    transmission: 0.72,
    thickness: 1.4,
    ior: 1.4,
    clearcoat: 0.6,
    clearcoatRoughness: 0.25,
    envMapIntensity: 1,
  });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  var wireGeometry = new THREE.IcosahedronGeometry(2.24, detail);
  var wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x2d78c9,
    wireframe: true,
    transparent: true,
    opacity: 0.22,
  });
  var wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
  scene.add(wireMesh);

  mesh.position.set(1.6, 0, 0);
  wireMesh.position.copy(mesh.position);

  // Pointer + scroll interaction targets
  var pointerX = 0;
  var pointerY = 0;
  var targetRotX = 0;
  var targetRotY = 0;
  var scrollFactor = 0;

  function onPointerMove(e) {
    var x = (e.clientX / window.innerWidth) * 2 - 1;
    var y = (e.clientY / window.innerHeight) * 2 - 1;
    pointerX = x;
    pointerY = y;
  }

  function onScroll() {
    var max = window.innerHeight;
    scrollFactor = Math.min(window.scrollY / max, 1);
  }

  if (!isMobile && !reduceMotion) {
    window.addEventListener("mousemove", onPointerMove, { passive: true });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  function onResize() {
    width = wrap.clientWidth;
    height = wrap.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  window.addEventListener("resize", onResize);

  var clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    var delta = clock.getDelta();

    if (!reduceMotion) {
      targetRotY += (pointerX * 0.5 - targetRotY) * 0.02;
      targetRotX += (pointerY * 0.3 - targetRotX) * 0.02;

      mesh.rotation.y += delta * 0.12 + targetRotY * 0.01;
      mesh.rotation.x += delta * 0.05;
      wireMesh.rotation.copy(mesh.rotation);

      mesh.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.15 - scrollFactor * 1.4;
      wireMesh.position.y = mesh.position.y;
      camera.position.y = -scrollFactor * 0.6;
    }

    renderer.render(scene, camera);
  }

  animate();
  canvas.classList.add("is-ready");

  // Pause rendering when the tab is hidden — saves battery/CPU.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      clock.stop();
    } else {
      clock.start();
    }
  });
}

if (prefersReducedMotion() && window.innerWidth < 480) {
  // Smallest screens + reduced motion: skip WebGL entirely, keep it light.
  showFallback();
} else {
  init().catch(function () {
    showFallback();
  });
}
