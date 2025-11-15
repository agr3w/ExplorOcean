import React, { Suspense, useState } from "react";
import { Box, Skeleton } from "@mui/material";
import ModelViewer from "../../ModelViewer";

export default function MediaDisplay({ show3D, item }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Se não houver nem modelo 3D nem imagem, não renderiza nada
  if (!item.threeModel && !item.imageUrl) return null;

  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {show3D && item.threeModel ? (
        <Suspense
          fallback={
            <Skeleton
              variant="rectangular"
              width={800}
              height={500}
              sx={{ borderRadius: 3 }}
            />
          }
        >
          <Box
            sx={{
              width: 800,
              height: 500,
              maxWidth: "100%",
              maxHeight: "60vh",
            }}
          >
            <ModelViewer
              modelUrl={item.threeModel}
              backgroundPreset={item.backgroundPreset}
              modelScale={item.modelScale}
              modelPosition={item.modelPosition}
            />
          </Box>
        </Suspense>
      ) : item.imageUrl ? (
        <>
          {!imgLoaded && (
            <Skeleton
              variant="rectangular"
              width={600}
              height={500}
              sx={{ borderRadius: 3 }}
            />
          )}
          <img
            src={item.imageUrl}
            alt={item.label}
            style={{
              width: 800,
              height: 500,
              objectFit: "cover",
              borderRadius: 12,
              display: imgLoaded ? "block" : "none",
              maxWidth: "100%",
              maxHeight: "80vh",
            }}
            onLoad={() => setImgLoaded(true)}
          />
        </>
      ) : null}
    </Box>
  );
}
