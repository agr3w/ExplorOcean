import React, { useState, Suspense, useRef } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

function Loader() {
  return (
    <Html center>
      <CircularProgress color="primary" />
    </Html>
  );
}

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={1.5} />;
}

const CardMediaWrapper = styled(Box)({
  height: 200,
  width: '100%',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '8px',
  color: 'white',
  overflow: 'hidden',
  cursor: 'pointer',
});

const CardHeader = ({ imageUrl, rating, tags, threeModel }) => {
  const [show3D, setShow3D] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (threeModel) {
      setIsHovered(true);
      if (!hasLoaded) {
        setHasLoaded(true); 
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CardMediaWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      sx={{ background: `url(${imageUrl}) center/cover` }}
    >
      {hasLoaded && threeModel && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                background: '#02101a',
              }}
            >
              <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[2, 2, 5]} intensity={1} />
                <Suspense fallback={<Loader />}>
                  <Model url={threeModel} />
                </Suspense>
              </Canvas>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {rating && (
        <Box sx={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.5)', borderRadius: '4px', p: '4px 8px', zIndex: 2 }}>
          <Typography variant="caption" sx={{ color: 'white' }}>{rating}⭐</Typography>
        </Box>
      )}
      {tags && (
        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: '4px', zIndex: 2 }}>
          {tags.map((tag, tagIndex) => (
            <Box key={tagIndex} sx={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px', p: '4px 8px' }}>
              <Typography variant="caption" sx={{ color: 'white' }}>{tag}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </CardMediaWrapper>
  );
};

export default CardHeader;