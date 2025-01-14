import React, { useEffect } from "react";
import * as THREE from "three";

const GenerativePersonaImage: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // Dynamically resize renderer to container size
    const canvasContainer = document.getElementById("canvas-container");
    if (canvasContainer) {
      renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
      canvasContainer.appendChild(renderer.domElement);
    }

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float noise = sin(pos.x * 10.0 + time) * sin(pos.y * 10.0 + time);
          pos.z += noise * 0.1;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          vec3 color = vec3(vUv, 0.5 + 0.5 * sin(vUv.x * 10.0 + vUv.y * 10.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 2;

    const animate = function () {
      requestAnimationFrame(animate);
      material.uniforms.time.value += 0.05;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing to adjust canvas size dynamically
    const handleResize = () => {
      if (canvasContainer) {
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose(); // Cleanup WebGLRenderer
    };
  }, []);

  return <div id="canvas-container" style={{ width: "100%", height: "100%" }}></div>;
};

export default GenerativePersonaImage;
