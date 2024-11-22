# Projeto de Login com React, React Router e Bootstrap

Este é um projeto simples que implementa uma página de login usando **React**, **React Router** e **Bootstrap**. O nome do usuário é armazenado no `localStorage` e exibido na página principal, com suporte para parâmetros de rota dinâmicos.

---

## 🚀 Funcionalidades

- **Login:** Formulário de login com validação de campo obrigatório.
- **Armazenamento Local:** O nome do usuário é salvo no `localStorage`.
- **Redirecionamento Dinâmico:** Após o login, o usuário é redirecionado para a página principal, com o nome incluído na URL.
- **Rotas Protegidas:** O acesso à página principal requer login; caso contrário, o usuário será redirecionado para a página de login.
- **Interface Responsiva:** Utiliza Bootstrap para uma experiência amigável em dispositivos móveis e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **React** (Vite)
- **React Router Dom** (v6)
- **Bootstrap**

---

### Passo a Passo

1. **Clone o Repositório:**
    `git clone https://github.com/devsilasz/GS2-WebDev.git`


2. **Instale as dependências**
    `npm install`

3. **Inicie o servidor de desenvolvimento**
    `npm run dev`

4. **Acesse no navegador**
    `http://localhost:5173`


#  Funcionalidade das Rotas

`/login:` Página de login.
`/home/:nome:` Página principal que exibe o nome do usuário logado. Acesso restrito a usuários logados.