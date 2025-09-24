import { Box, Button } from "@mui/material";
import { MdPhoto, MdViewInAr } from "react-icons/md";

export default function FaunaFloraToggleButtons({ show3D, setShow3D }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: 16, md: 32 },
        right: { xs: 16, md: 32 },
        zIndex: 10,
        display: "flex",
        gap: 2,
      }}
    >
      <Button
        onClick={() => setShow3D(true)}
        sx={{
          minWidth: 0,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: show3D
            ? "linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)"
            : "rgba(255,255,255,0.10)",
          color: show3D ? "#fff" : "#36d1e0",
          boxShadow: show3D ? "0 2px 8px rgba(30,60,120,0.18)" : "none",
          transition: "all 0.2s",
          "&:hover": {
            background: "linear-gradient(135deg, #1976d2 60%, #36d1e0 100%)",
            color: "#fff",
          },
        }}
      >
        <MdViewInAr size={28} />
      </Button>
      <Button
        onClick={() => setShow3D(false)}
        sx={{
          minWidth: 0,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: !show3D
            ? "linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)"
            : "rgba(255,255,255,0.10)",
          color: !show3D ? "#fff" : "#36d1e0",
          boxShadow: !show3D ? "0 2px 8px rgba(30,60,120,0.18)" : "none",
          transition: "all 0.2s",
          "&:hover": {
            background: "linear-gradient(135deg, #1976d2 60%, #36d1e0 100%)",
            color: "#fff",
          },
        }}
      >
        <MdPhoto size={28} />
      </Button>
    </Box>
  );
}