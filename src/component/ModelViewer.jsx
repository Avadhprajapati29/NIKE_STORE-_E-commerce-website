// ModelViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = ({ modelPath }) => {
    const gltf = useLoader(GLTFLoader, modelPath);

    return (
        <Canvas style={{ height: '400px' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <primitive object={gltf.scene} />
            <OrbitControls />
        </Canvas>
    );
};

export default ModelViewer;
