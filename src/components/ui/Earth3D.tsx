"use client";

import React, { useRef, useEffect } from "react";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import * as THREE from "three";

interface Earth3DProps {
  svgPath: string;
}

const Earth3D: React.FC<Earth3DProps> = ({ svgPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const loader = new SVGLoader();

    loader.load(svgPath, (data: any) => {
      const paths = data.paths;
      const group = new THREE.Group();

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const shapes = path.toShapes(true);

        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j];
          const geometry = new THREE.ShapeGeometry(shape);
          const material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false,
          });
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        }
      }

      group.scale.set(0.1, -0.1, 0.1);
      group.position.set(0, 0, 0);

      scene.add(group);
      renderer.render(scene, camera);
    });

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [svgPath]);
  return <div ref={containerRef} className="h-full w-[250px]" />;
};

export default Earth3D;
