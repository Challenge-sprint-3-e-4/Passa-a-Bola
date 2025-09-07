## Challenge FIAP 2025 – Parceria Passa a Bola  

## 👥 Equipe
- Giovana Bernardino Carnevali – RM 566196  
- Alexandre Freitas Silva – RM 566278  
- Felipe Rodrigues Gomes Ribeiro – RM 562482  
- Artur Distrutti Santos – RM 561319  
- João Vitor Parizotto Rocha – RM 562719

---

## 📖 Sobre o Projeto
O **Passa a Bola** é uma plataforma que foi desenvolvida para solucionar questões levantadas pela Empresa Passa a Bola
O projeto foi desenvolvido em **React** com **Tailwind CSS** e utiliza **React Router** para roteamento, garantindo uma aplicação leve, organizada e performática.

O projeto possui funcionalidades de login com validação de credenciais e controle de sessão, além de **Responsividade** e um design baseado nas cores do projeto.

---

## ⚙️ Requisitos do Sistema
- Node.js >= 18  
- npm >= 9  
- Navegador moderno (Chrome, Edge, Firefox)  

---

## 📂 Estrutura de Pastas

```

passabola/
│
├─ src/
│   ├─ assets/            # Imagens do projeto (logo, redes sociais, etc.)
│   ├─ components/        # Componentes reutilizáveis (Header, Footer, Login, ServidorLogin)
│   ├─ pages/             # Páginas da aplicação (Jogadoras, Blog, Clubes, Campeonatos, Escolinhas, Início)
│   ├─ App.jsx            # Componente principal com roteamento React Router
│   └─ main.jsx           # Ponto de entrada da aplicação
│
├─ package.json
├─ vite.config.js
└─ index.html

````

---

## 🚀 Comandos para Executar o Projeto

1. **Instalar dependências:**
```bash
npm install
````

2. **Rodar o projeto em desenvolvimento:**

```bash
npm run dev
```

---

## 🔑 Informações de Login

Para acessar o sistema, utilize as credenciais pré-definidas:

* **Usuário:** admin
* **Senha:** senha123

O login utiliza um token armazenado no `localStorage` para manter a sessão ativa. Após o login, os botões **Entrar** e **Cadastrar** desaparecem, e é possível encerrar a sessão clicando em **Sair**.

---

## 🛠️ Tecnologias Utilizadas

* React 18
* Tailwind CSS
* React Router DOM
* JWT (simulado via componente `ServidorLogin`)
* Leaflet + Overpass API (mapa das escolinhas)
* SweetAlert2 (alertas de feedback)

---

## ✨ Funcionalidades Atuais

* Login e controle de sessão
* Header e Footer responsivos
* Menu hamburguer para telas pequenas
* Rotas protegidas por login
* Redirecionamento automático para login caso usuário não esteja autenticado
* Página **Escolinhas** com mapa interativo (OpenStreetMap + Overpass API)


---

## 🧪 Testes Unitários (Exemplo)

O projeto contará com testes unitários para garantir a estabilidade das camadas críticas.

Exemplo usando **Jest**:

```javascript
import { login } from "../services/auth";

test("login com credenciais corretas retorna token", () => {
  const result = login("admin", "senha123");
  expect(result).toHaveProperty("token");
});

test("login com credenciais incorretas falha", () => {
  expect(() => login("user", "errado")).toThrow("Credenciais inválidas");
});
```

---

## ✅ Observações

* O roteamento foi migrado para **React Router**, mantendo rotas protegidas e redirecionamento automático.
* As páginas possuem placeholders que podem ser substituídos pelo conteúdo real.
* Este projeto poderá ser expandido para incluir testes unitários completos e integração completa com a API.

```

Se quiser, posso criar **uma versão ainda mais enxuta e visual**, com destaque para cores, badges de status e instruções de mapa/alerta, pronta para submissão final do Challenge FIAP 2025.  

Quer que eu faça isso?
```
