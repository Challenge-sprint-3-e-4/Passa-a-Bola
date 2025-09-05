# Passa a Bola – Plataforma de Gestão do Futebol Feminino

## Sobre o Projeto
O **Passa a Bola** é uma plataforma acadêmica desenvolvida para gerenciar informações sobre jogadoras, clubes, campeonatos e escolinhas de futebol feminino. O projeto foi desenvolvido em **React** com **Tailwind CSS** e utiliza **Wouter** para roteamento, garantindo uma aplicação leve e performática.

O projeto possui funcionalidades de login com validação de credenciais e controle de sessão, além de **Header e Footer responsivos** e um design baseado em cores do projeto.

> Obs: Caso seja necessário, a migração de **Wouter para React Router** é fácil, bastando alterar a forma de definir rotas e links.

---

## Requisitos do Sistema
- Node.js >= 18
- npm >= 9
- Navegador moderno (Chrome, Edge, Firefox)

---

## Estrutura de Pastas

```

passabola/
│
├─ src/
│   ├─ assets/            # Imagens do projeto (logo, redes sociais, etc.)
│   ├─ components/        # Componentes reutilizáveis (Header, Footer, Login, ServidorLogin)
│   ├─ pages/             # Páginas da aplicação (Jogadoras, Blog, Clubes, Campeonatos, Escolinhas, Início)
│   ├─ App.jsx            # Componente principal com roteamento Wouter
│   └─ main.jsx           # Ponto de entrada da aplicação
│
├─ public/
├─ package.json
├─ tailwind.config.js
└─ index.html

```
## Comandos para Executar o Projeto

1. **Instalar dependências:**
```bash
npm install
````

2. **Rodar o projeto em desenvolvimento:**

```bash
npm run dev
```

3. **Instalar Wouter (roteamento leve usado no projeto):**

```bash
npm install wouter
```


---

## Informações de Login

Para acessar o sistema, utilize as credenciais pré-definidas:

* **Usuário:** admin
* **Senha:** senha123

O login utiliza um token armazenado no `localStorage` para manter a sessão ativa. Após o login, os botões **Entrar** e **Cadastrar** desaparecem, e é possível encerrar a sessão clicando em **Sair**.

---

## Tecnologias Utilizadas

* React 18
* Tailwind CSS
* Wouter (roteamento leve)
* JWT (simulado via componente `ServidorLogin`)

---

## Funcionalidades Atuais

* Login e controle de sessão
* Header e Footer responsivos
* Menu hamburguer para telas pequenas
* Rotas protegidas por login
* Redirecionamento automático para login caso usuário não esteja autenticado

---

## Observações

* O roteamento foi feito com **Wouter** para manter a aplicação mais leve, mas é totalmente possível migrar para **React Router** caso seja exigido pelo professor.
* As páginas possuem placeholders que podem ser facilmente substituídos pelo conteúdo real.
* O projeto ainda poderá ser expandido para incluir testes unitários, seed de dados e documentação de endpoints.

```

S
```
