import React, { useState, Suspense, useRef } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { MdStar } from 'react-icons/md';

function Loader() {
  return (
    <Html center>
      <CircularProgress color="primary" />
    </Html>
  );
}

function Model({ url, scale, position }) {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={scale} position={position} />;
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

const RatingBox = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  background: 'linear-gradient(135deg, rgba(54,209,224,0.45) 0%, rgba(41,121,255,0.35) 100%)',
  borderRadius: '8px',
  padding: '4px 12px 4px 8px',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  zIndex: 2,
  boxShadow: '0 2px 8px rgba(54,209,224,0.10)',
  border: '1.5px solid rgba(54,209,224,0.18)',
  color: '#36d1e0',
  fontWeight: 700,
  fontSize: '0.95rem',
}));

const CardHeader = ({ imageUrl, rating, tags, threeModel, modelScale, modelPosition }) => {
  const [show3D, setShow3D] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const iamgeUrl3D = "/underWater.jpg"; // Supondo que a imagem 3D tenha um sufixo _3d antes da extensão

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
                background: `url(${iamgeUrl3D}) center/cover`,
              }}
            >
              <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[2, 2, 5]} intensity={1} />
                <Suspense fallback={<Loader />}>
                  <Model url={threeModel} scale={modelScale} position={modelPosition} />
                </Suspense>
              </Canvas>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {rating && (
        <RatingBox
          initial={{ scale: 0.95, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <MdStar size={18} style={{ color: '#ffd600', marginRight: 4, filter: 'drop-shadow(0 0 4px #ffd600)' }} />
          <Typography variant="caption" sx={{ color: '#fff', fontWeight: 'bold', fontSize: '0.80rem' }}>
            {rating}
          </Typography>
        </RatingBox>
      )}
    </CardMediaWrapper>
  );
};

export default CardHeader;