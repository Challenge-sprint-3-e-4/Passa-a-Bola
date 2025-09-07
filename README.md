# ## Challenge FIAP 2025 – Parceria Passa a Bola

## 👥 Equipe

* Giovana Bernardino Carnevali – RM 566196
* Alexandre Freitas Silva – RM 566278
* Felipe Rodrigues Gomes Ribeiro – RM 562482
* Artur Distrutti Santos – RM 561319
* João Vitor Parizotto Rocha – RM 562719

---

## 📖 Sobre o Projeto

O **Passa a Bola** é uma plataforma que foi desenvolvida para solucionar questões levantadas pela Empresa Passa a Bola.
O projeto foi desenvolvido em **React** com **Tailwind CSS** e utiliza **React Router** para roteamento, garantindo uma aplicação leve, organizada e performática.

O sistema possui funcionalidades de login com validação de credenciais e controle de sessão, além de **responsividade** e um design baseado nas cores do projeto.
Na página **Escolinhas**, foi implementado um **mapa interativo** que localiza escolinhas de futebol próximas ao usuário, utilizando a **Overpass API** (OpenStreetMap).

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
│   ├─ App.jsx            # Componente principal com roteamento React Router
│   └─ main.jsx           # Ponto de entrada da aplicação
│
├─ package.json
├─ vite.config.js
└─ index.html
```

---

## 🚀 Comandos para Executar o Projeto

1. **Instalar dependências:**

```bash
npm install
```

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

## 🌍 Funcionalidade de Escolinhas – Overpass API

A página **Escolinhas** utiliza o **Leaflet** para renderizar mapas e a **Overpass API** para consultar escolinhas de futebol próximas ao usuário.

### 🔎 Como funciona:

1. O usuário clica em **"Procurar perto de mim"**.
2. O navegador solicita permissão de geolocalização.
3. A aplicação consulta a Overpass API com a latitude e longitude do usuário.
4. Escolinhas (pontos com `sport=soccer`) em um raio de 3 km são exibidas no mapa.
5. Alertas mostram se foram encontradas ou não escolinhas próximas.

---

## 📡 Endpoints da API

Exemplo de consulta utilizada:

```http
https://overpass-api.de/api/interpreter?data=[out:json];node(around:3000,LATITUDE,LONGITUDE)[sport=soccer];out;
```

### 📑 Detalhamento dos parâmetros

* **`[out:json]`** → Define que a resposta será em JSON.
* **`node(around:3000, LAT, LON)`** → Busca nós (pontos) em um raio de 3 km.
* **`[sport=soccer]`** → Filtra apenas locais relacionados a futebol.
* **`out;`** → Finaliza a consulta.

### Tabela de Endpoints

| Método | Endpoint                                                                                               | Descrição                                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `GET`  | `https://overpass-api.de/api/interpreter?data=[out:json];node(around:3000,LAT,LON)[sport=soccer];out;` | Retorna todas as escolinhas de futebol (pontos com `sport=soccer`) em um raio de 3 km da posição atual do usuário. |

⚠️ **Observação:** a Overpass API é pública e pode ter limitações de uso.



---

📌 Assim, o **Passa a Bola** combina **mapas interativos, autenticação, responsividade e integração com API pública** para entregar uma experiência completa e inovadora.

---

