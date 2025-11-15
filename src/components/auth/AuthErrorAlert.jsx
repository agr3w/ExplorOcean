import React from 'react';
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function AuthErrorAlert({ message, type = "error", onClose }) {
  return (
    <Collapse in={!!message}>
      <Alert
        severity={type}
        action={
          onClose && (
            <IconButton color="inherit" size="small" onClick={onClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )
        }
        sx={{
          mb: 2,
          borderRadius: 2,
          boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
          background: type === "error"
            ? 'linear-gradient(90deg, #ff1744 0%, #1976d2 100%)'
            : 'linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)',
          color: '#fff',
        }}
      >
        {message}
      </Alert>
    </Collapse>
  );
}