import { Box, Typography, Modal, Button } from "@mui/material";

export default function FaunaFlora3DPreferenceModal({ open, onSelect }) {
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          minWidth: 320,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Deseja ativar os modelos 3D dos animais e plantas?
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Modelos 3D podem exigir mais do seu computador. Se preferir, você pode visualizar apenas as imagens.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={() => onSelect(true)}>
            Ativar 3D
          </Button>
          <Button variant="outlined" color="primary" onClick={() => onSelect(false)}>
            Mostrar imagens
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}