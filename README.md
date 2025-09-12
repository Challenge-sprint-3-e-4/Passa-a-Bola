# Challenge FIAP 2025 – Parceria Passa a Bola

## 👥 Equipe

* Giovana Bernardino Carnevali – RM 566196
* Alexandre Freitas Silva – RM 566278
* Felipe Rodrigues Gomes Ribeiro – RM 562482
* Artur Distrutti Santos – RM 561319
* João Vitor Parizotto Rocha – RM 562719

---

## 🌐 Deploy

O projeto está hospedado no **Vercel**, garantindo fácil acesso e performance otimizada:

* [https://passa-a-bola.vercel.app/](https://passa-a-bola.vercel.app/)



---

## 📖 Sobre o Projeto

O **Passa a Bola** é uma plataforma desenvolvida para solucionar questões levantadas pela Empresa Passa a Bola.  
O projeto foi construído com **React** e **Tailwind CSS**, utilizando **React Router** para roteamento, garantindo uma aplicação leve, organizada e performática.

O sistema possui funcionalidades de login com validação de credenciais e controle de sessão, além de **responsividade**.

---

## ⚙️ Requisitos do Sistema

* Node.js >= 18
* npm >= 9
* Navegador moderno (Chrome, Edge, Firefox)

---

## 📂 Estrutura de Pastas

```

passabola/
│
├─ src/
│   ├─ assets/            # Imagens do projeto (logo, redes sociais, etc.)
│   ├─ components/        # Componentes reutilizáveis (Header, Footer, Login, ServidorLogin)
│   ├─ pages/             # Páginas da aplicação (Jogadoras, Blog, Clubes, Campeonatos, Escolinhas, Início)
│   ├─ data/              # Arquivos de seed para simulação de dados
│   │   └─ usersSeed.js   # Usuário admin para login
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

Para acessar o sistema, utilize o usuário de teste **admin**:

* **Usuário:** admin
* **Senha:** senha123

O login utiliza um token armazenado no `localStorage` para manter a sessão ativa.
Após o login, os botões **Entrar** e **Cadastrar** desaparecem, e é possível encerrar a sessão clicando em **Sair**.

---

## 🌱 Script de Seed – Simulação de Usuários

O projeto utiliza um **script de seed** (`usersSeed.js`) para simular usuários sem necessidade de backend real.

### 📄 Exemplo de `usersSeed.js`

```js
export const usersSeed = [
  { username: "admin", password: "senha123", role: "admin" }
];
```

⚠️ **Observação:** Esse seed é apenas para prototipagem e testes.

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

* **Login e controle de sessão** – autenticação de usuários e proteção de rotas.
* **Header e Footer responsivos** – menu hamburguer para telas pequenas.
* **Página Escolinhas** – mapa interativo (OpenStreetMap + Overpass API) que mostra escolinhas próximas ao usuário.
* **Blog** – publicação de histórias inspiradoras com título, categoria, conteúdo e upload de imagem. Cards padronizados, feedback visual com SweetAlert2.
* **Jogadoras** – perfil das atletas com informações de jogos, gols, assistências e foto. Layout responsivo em cards padronizados.
* **Campeonatos** – cadastro e visualização de campeonatos, contagem de gols, placares em tempo real e interface amigável de administração.
* **Clubes Parceiros** – grid responsivo de clubes, com card de chamada para solicitar parceria.
* **Redirecionamento automático** para login caso usuário não esteja autenticado.
* **Design e cores** consistentes com a paleta do projeto.
* **Responsividade total** em diferentes tamanhos de tela.

---



## 💡 Observações Finais

* Toda a aplicação é construída para ser **responsiva**, acessível e visualmente consistente.
* A plataforma é **simulada**, com seed de usuários e dados estáticos, mas estruturada para integração futura com **backend real**.
* O uso de **Tailwind CSS, React Router, Leaflet e SweetAlert2** garante interatividade e design moderno.

```

