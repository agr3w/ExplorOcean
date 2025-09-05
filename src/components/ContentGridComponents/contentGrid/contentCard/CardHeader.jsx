import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// Importa o Canvas do react-three-fiber
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} scale={1.5} />;
}

const CardMediaWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'imageUrl'
})(({ imageUrl }) => ({
  height: 200,
  width: '100%',
  background: imageUrl ? `url(${imageUrl}) center/cover` : 'none',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '8px',
  color: 'white',
  overflow: 'hidden',
}));

const CardHeader = ({ imageUrl, rating, tags, threeModel }) => {
  return (
    <CardMediaWrapper imageUrl={threeModel ? undefined : imageUrl}>
      {/* Renderiza o elemento 3D se existir */}
      {threeModel && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            background: '#02101a',
          }}
        >
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <Suspense fallback={<mesh />}>
              <Model url={threeModel} />
            </Suspense>
          </Canvas>
        </Box>
      )}
      {/* Rating */}
      {rating && (
        <Box sx={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.5)', borderRadius: '4px', p: '4px 8px', zIndex: 2 }}>
          <Typography variant="caption" sx={{ color: 'white' }}>
            {rating}⭐
          </Typography>
        </Box>
      )}
      {/* Tags */}
      {tags && (
        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: '4px', zIndex: 2 }}>
          {tags.map((tag, tagIndex) => (
            <Box key={tagIndex} sx={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px', p: '4px 8px' }}>
              <Typography variant="caption" sx={{ color: 'white' }}>
                {tag}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </CardMediaWrapper>
  );
};

export default CardHeader;