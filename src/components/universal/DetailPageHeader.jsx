import React, { useState, Suspense } from 'react';
import { Box, Typography, Button, Skeleton } from '@mui/material';
import ModelViewer from './ModelViewer';
import { MdPhoto, MdViewInAr } from "react-icons/md";

export default function DetailPageHeader({ item, show3D, setShow3D }) {
  const isQuiz = item.questions;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {item.label}
      </Typography>

      {/* Botões de alternância */}
      {typeof show3D === "boolean" && setShow3D && (
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button
            onClick={() => setShow3D(true)}
            variant={show3D ? "contained" : "outlined"}
            startIcon={<MdViewInAr />}
            sx={{
              background: show3D
                ? "linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)"
                : "rgba(255,255,255,0.10)",
              color: show3D ? "#fff" : "#36d1e0",
              boxShadow: show3D ? "0 2px 8px rgba(30,60,120,0.18)" : "none",
              "&:hover": {
                background: "linear-gradient(135deg, #1976d2 60%, #36d1e0 100%)",
                color: "#fff",
              },
            }}
          >
            3D
          </Button>
          <Button
            onClick={() => setShow3D(false)}
            variant={!show3D ? "contained" : "outlined"}
            startIcon={<MdPhoto />}
            sx={{
              background: !show3D
                ? "linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)"
                : "rgba(255,255,255,0.10)",
              color: !show3D ? "#fff" : "#36d1e0",
              boxShadow: !show3D ? "0 2px 8px rgba(30,60,120,0.18)" : "none",
              "&:hover": {
                background: "linear-gradient(135deg, #1976d2 60%, #36d1e0 100%)",
                color: "#fff",
              },
            }}
          >
            Imagem
          </Button>
        </Box>
      )}

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {item.category}
        {item.duration && ` | Duração: ${item.duration}`}
        {isQuiz && item.difficulty && ` | Dificuldade: ${item.difficulty}`}
        {isQuiz && item.numberOfQuestions && ` | Perguntas: ${item.numberOfQuestions}`}
      </Typography>

      {/* Visualização 3D ou Imagem */}
      <Box sx={{ my: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {show3D && item.threeModel ? (
          <Suspense fallback={<Skeleton variant="rectangular" width={600} height={400} sx={{ borderRadius: 3 }} />}>
            <Box sx={{ my: 4 }}>
              <ModelViewer modelUrl={item.threeModel} backgroundPreset={item.backgroundPreset} />
            </Box>
          </Suspense>
        ) : item.imageUrl ? (
          <>
            {!imgLoaded && (
              <Skeleton variant="rectangular" width={400} height={400} sx={{ borderRadius: 3 }} />
            )}
            <img
              src={item.imageUrl}
              alt={item.label}
              style={{
                width: 400,
                height: 400,
                objectFit: 'cover',
                borderRadius: 12,
                display: imgLoaded ? 'block' : 'none'
              }}
              onLoad={() => setImgLoaded(true)}
            />
          </>
        ) : (
          <Skeleton variant="rectangular" width={400} height={400} sx={{ borderRadius: 3 }} />
        )}
      </Box>

      {/* Exibe o vídeo ou o botão de quiz */}
      {item.videoUrl && (
        <Box
          sx={{
            position: 'relative',
            paddingTop: '56.25%', // Proporção de aspecto 16:9
            height: 0,
            overflow: 'hidden',
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.1)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0, 10, 20, 0.7)',
            '&:hover': {
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <iframe
            src={item.videoUrl}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            auto
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
      )}

      {isQuiz && (
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large">
            Iniciar Quiz
          </Button>
        </Box>
      )}
    </>
  );
}