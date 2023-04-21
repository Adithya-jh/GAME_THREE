import React from 'react';

import { RigidBody } from '@react-three/rapier';

import { useRef } from 'react';

import * as THREE from 'three';

THREE.ColorManagement.legacyMode = false;

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// Needed Material

const floorMaterial1 = new THREE.MeshStandardMaterial({ color: 'limegreen' });
const floorMaterial2 = new THREE.MeshStandardMaterial({ color: 'greenYellow' });
const obstacleMaterial1 = new THREE.MeshStandardMaterial({
  color: 'orangered',
});
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' });

function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* floor */}
      <mesh
        geometry={boxGeometry}
        material={floorMaterial1}
        scale={[4, 0.2, 4]}
        position={[0, -0.1, 0]}
        receiveShadow
      />
    </group>
  );
}

function BlockSpinner({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  return (
    <group position={position}>
      {/* floor */}
      <mesh
        geometry={boxGeometry}
        material={floorMaterial2}
        scale={[4, 0.2, 4]}
        position={[0, -0.1, 0]}
        receiveShadow
      />

      <RigidBody
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial1}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}

function Level() {
  return (
    <>
      <BlockStart position={[0, 0, 4]} />
      <BlockSpinner position={[0, 0, 0]} />
    </>
  );
}

export default Level;
