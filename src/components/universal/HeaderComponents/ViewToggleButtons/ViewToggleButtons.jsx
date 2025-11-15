import { Box, Button } from '@mui/material';
import { MdPhoto, MdViewInAr } from "react-icons/md";

export default function ViewToggleButtons({ show3D, setShow3D }) {
  return (
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
  );
}