import { Box, Button } from "@mui/material";
import { MdPhoto, MdViewInAr } from "react-icons/md";

export default function FaunaFloraToggleButtons({ show3D, setShow3D }) {
    const buttonSx = (isSelected) => ({
        minWidth: 0, width: 48, height: 48,
        borderRadius: "50%",
        color: isSelected ? "#fff" : "#e3f2fd",
        // Estilo Glassmorphism
        backgroundColor: isSelected ? 'rgba(54, 209, 224, 0.3)' : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(8px)',
        border: `1.5px solid ${isSelected ? 'rgba(54, 209, 224, 0.8)' : 'rgba(255, 255, 255, 0.2)'}`,
        boxShadow: isSelected ? '0 0 15px rgba(54, 209, 224, 0.5)' : 'none',
        transition: "all 0.3s ease",
        '&:hover': {
            backgroundColor: 'rgba(54, 209, 224, 0.2)',
            borderColor: 'rgba(54, 209, 224, 0.7)',
        },
    });

    return (
        <Box id="tour-step-2" sx={{ position: "absolute", top: { xs: 16, md: 32 }, right: { xs: 16, md: 32 }, zIndex: 10, display: "flex", gap: 1.5 }}>
            <Button onClick={() => setShow3D(true)} sx={buttonSx(show3D)}>
                <MdViewInAr size={28} />
            </Button>
            <Button onClick={() => setShow3D(false)} sx={buttonSx(!show3D)}>
                <MdPhoto size={28} />
            </Button>
        </Box>
    );
}