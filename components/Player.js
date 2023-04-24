import React from 'react';

import { RigidBody } from '@react-three/rapier';

function Player() {
  return (
    <>
      <RigidBody
        colliders="ball"
        position={[0, 1, 0]}
        restitution={0.2}
        friction={1}
      >
        <mesh castShadow>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial color="mediumpurple" flatShading />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Player;
