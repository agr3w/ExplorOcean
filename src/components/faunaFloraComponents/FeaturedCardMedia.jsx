import React, { useState, Suspense, useRef } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  return (
    <Html center>
      <CircularProgress color="primary" />
    </Html>
  );
}

function Model({ url, scale = 1.5, position = [0, -0.8, 0] }) {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });
  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={scale}
      position={position}
    />
  );
}

export default function FeaturedCardMedia({ imageUrl, threeModel, modelScale, modelPosition }) {
  const [show3D, setShow3D] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const iamgeUrl3D = "/underWater.jpg"; // Supondo que a imagem 3D tenha um sufixo _3d antes da extensão

  const handleMouseEnter = () => {
    if (threeModel) {
      setShow3D(true);
      if (!hasLoaded) setHasLoaded(true);
    }
  };
  const handleMouseLeave = () => {
    setShow3D(false);
  };

  return (
    <Box
      sx={{
        flex: 1,
        minHeight: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        cursor: "default", // Sempre cursor padrão
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {show3D && threeModel && hasLoaded ? (
          <motion.div
            key="3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              background: `url(${iamgeUrl3D}) center/cover`,
              PointerEvent: "none",
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
        ) : (
          <Box
            key="img"
            sx={{
              width: "100%",
              height: "100%",
              minHeight: "300px",
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 0,
              zIndex: 1,
              position: "absolute",
              inset: 0,
            }}
          />
        )}
      </AnimatePresence>
    </Box>
  );
}
