# 🌊 ExplorOcean: Uma Jornada Imersiva ao Fundo do Mar

**ExplorOcean** é uma plataforma web educacional e interativa, projetada para levar os usuários a uma exploração visual e informativa do oceano. O projeto combina uma estética moderna de "liquid glass" com animações fluidas, interatividade 3D e um backend robusto para criar uma experiência de usuário envolvente e personalizada.

O projeto é construído como uma aplicação full-stack moderna, utilizando **React (Vite)** para o frontend e **Node.js (Express) hospedado como Netlify Functions** para o backend, com um banco de dados **PostgreSQL (Neon)** gerenciado pelo **Prisma**.

---

## 📸 Galeria de Funcionalidades

| Página de Autenticação | Linha do Tempo Geológica |
| :---: | :---: |
| <img width="1000" height="660" alt="Screenshot_1" src="https://github.com/user-attachments/assets/e83e9e16-5f33-4c2f-a809-c1682e5dd52d" /> | <img width="1000" height="660" alt="Screenshot_2" src="https://github.com/user-attachments/assets/7237fd9c-9a51-44d9-aeb8-57b90c9e26d5" /> |
| **Login/Cadastro** | **Linha do Tempo Interativa** |

| Globo 3D Interativo | Página de Perfil do Usuário |
| :---: | :---: |
| <img width="1000" height="660" alt="Screenshot_3" src="https://github.com/user-attachments/assets/0d2038cf-29bc-4d86-873b-04e734140265" /> | <img width="1000" height="660" alt="Screenshot_4" src="https://github.com/user-attachments/assets/ac7f25b5-3e9b-42e2-a644-34cbb31d0871" /> |
| **Exploração com Pin's Dinâmicos** | **Gerenciamento de Conta** |

---

## ✨ Funcionalidades Principais

Este projeto vai além de um simples site de conteúdo, implementando uma arquitetura de aplicação completa:

### 🚀 UI/UX e Animação
* **Scroll Suave (Lenis):** A navegação em toda a página é controlada pela biblioteca `@studio-freight/lenis`, proporcionando um efeito de scroll com inércia suave, que é desativado automaticamente em dispositivos móveis.
* **Animações de Página (Framer Motion):** As transições entre rotas são animadas com um efeito temático de "mergulho", onde a página antiga sobe e a nova emerge de baixo.
* **Animação de Layout Mágica:** A filtragem de conteúdo (ex: Fauna/Flora) usa a prop `layout` do Framer Motion para animar a reorganização dos cards na tela.
* **Estética "Liquid Glass":** Um design system coeso com `backdropFilter: 'blur()'` e fundos translúcidos é usado em todos os componentes (navegador, modais, cards, painéis) para criar uma interface moderna.
* **Loaders Imersivos:** O projeto conta com dois loaders: uma tela de carregamento inicial complexa (com animação de ondas) e um loader de transição de rota (com bolhas flutuantes) para manter a imersão.

### 🌎 Exploração Interativa
* **Globo 3D (`react-three-fiber`):** Uma página de globo interativo onde o usuário pode explorar pinos de interesse dinâmicos, com um `DetailDrawer` que exibe informações contextuais.
* **Linha do Tempo Geológica:** Uma visualização da história da Terra com espaçamento proporcional (escala logarítmica), marcadores de eventos-chave e um mapa que se altera dinamicamente.
* **Visualizador 3D/2D:** Cards de conteúdo com um seletor para alternar entre imagens 2D e modelos 3D (`.glb`), com carregamento sob demanda no *hover* para otimizar a performance.
* **Tour de Onboarding (`react-joyride`):** Um tour guiado na primeira visita à página de Fauna/Flora para apresentar as funcionalidades ao usuário.

### 🔐 Autenticação e Personalização
* **Sistema de Autenticação Completo:** Registro de usuário (com hash `bcryptjs`) e Login (com `JWT`).
* **Gerenciamento de Estado Global (`AuthContext`):** Um contexto React centralizado que armazena o token e os dados do usuário, disponibilizando-os para toda a aplicação.
* **Rotas Protegidas:** A rota `/profile` e outras funcionalidades (como favoritar) são protegidas; usuários não autenticados são redirecionados para a página de login.
* **Página de Perfil Funcional:**
    * Atualização de dados do usuário (username, email, senha) com verificação de segurança (exigência da senha antiga).
    * Gerenciamento de preferências (ex: `enable3d`).
* **Sistema de Favoritos:** Funcionalidade completa para adicionar/remover itens dos favoritos, com feedback visual instantâneo (ícone de coração) e atualização do estado global.
* **Histórico de Atividades:** O backend registra automaticamente as páginas de conteúdo visitadas, com lógica anti-duplicação e um limite de 10 itens por usuário para otimização do banco de dados.

---

## 🛠️ Stack Tecnológica

### Frontend
* **Framework/Lib:** React (com Vite)
* **Estilização:** Material-UI (MUI)
* **Animação:** Framer Motion
* **Roteamento:** React Router DOM
* **Requisições HTTP:** Axios (com instância e interceptors centralizados)
* **Gerenciamento de Estado:** React Context API
* **3D:** React Three Fiber (`@react-three/fiber`), Drei
* **Scroll:** Lenis (`@studio-freight/lenis`)

### Backend
* **Ambiente:** Node.js
* **Hospedagem:** Netlify Functions (Serverless)
* **Framework:** Express.js (adaptado com `serverless-http`)
* **Banco de Dados:** PostgreSQL (hospedado no Neon)
* **ORM:** Prisma
* **Autenticação:** `jsonwebtoken` (JWT), `bcryptjs`

---
*Este projeto foi desenvolvido como parte da disciplina Projeto Multidisciplinar IV, onde por semestre, temos que apresentar um sistema à banca para sermos aprovado.*
