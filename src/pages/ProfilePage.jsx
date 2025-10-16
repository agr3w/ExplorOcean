// src/pages/ProfilePage.jsx

import React from 'react';
import { Box, Typography, Avatar, Button, Divider } from '@mui/material';
import ProfileSettings from '../components/profile/ProfileSettings';
import ProfilePreferences from '../components/profile/ProfilePreferences';
import ProfileHistory from '../components/profile/ProfileHistory';
import ProfileDangerZone from '../components/profile/ProfileDangerZone';

export default function ProfilePage() {
  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 8, p: 4, background: 'rgba(2,16,26,0.7)', borderRadius: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
        <Avatar src="/default-avatar.png" sx={{ width: 80, height: 80 }} />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Nome do Usuário</Typography>
          <Typography variant="body1" sx={{ color: '#e3f2fd' }}>email@exemplo.com</Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* Settings */}
      <ProfileSettings />

      {/* Preferences */}
      <ProfilePreferences />

      {/* History */}
      <ProfileHistory />

      {/* Danger Zone */}
      <ProfileDangerZone />
    </Box>
  );
}

// Estrutura Sugerida
// 1. Dados do Usuário

// Nome de usuário
// Email
// Foto/avatar (opcional)
// Data de cadastro
// 2. Configurações

// Alterar nome de usuário
// Alterar email
// Alterar senha
// Alterar foto/avatar
// 3. Preferências

// Preferência de visualização (ex: ativar/desativar modelos 3D)
// Idioma (se houver suporte)
// Notificações (se houver suporte)
// 4. Histórico

// Quizzes realizados e pontuação
// Documentários assistidos
// Fauna/flora favoritos ou marcados
// 5. Ações de Conta

// Excluir conta
// Sair/logout
// Estrutura de Componentes (React)
// ProfileHeader (avatar, nome, email)
// ProfileSettings (formulário para editar dados)
// ProfilePreferences (switches/toggles para preferências)
// ProfileHistory (lista de quizzes/documentários/fauna/flora)
// ProfileDangerZone (botão para excluir conta)


// Backend (CRUD)
// GET /user/:id (dados do usuário)
// PUT /user/:id (editar dados)
// DELETE /user/:id (excluir conta)
// GET /user/:id/history (quizzes/documentários/fauna/flora)
// Próximos Passos
// Criar src/pages/ProfilePage.jsx
// Criar componentes em src/components/profile/
// Implementar rotas no backend para CRUD de usuário