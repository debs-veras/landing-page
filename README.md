# Landing Page

Landing Page desenvolvida com **React + Vite**, focada em **arquitetura de frontend**, **animações avançadas**, **responsividade**, **SEO on-page** e **organização de código**. O projeto explora lazy loading, animações controladas por scroll e canvas animation.

---

## 🧩 Visão Geral

Este projeto consiste em uma landing page de página única (SPA) com navegação por âncoras, construída para servir como **portfólio pessoal** e também como base reutilizável para páginas institucionais.

Principais características:

* Arquitetura clara entre **rotas**, **páginas**, **layout** e **componentes**
* Uso de **React Router** mesmo em SPA, preparando o projeto para escalabilidade
* **Lazy loading** de páginas com `React.lazy` e `Suspense`
* Animações performáticas com **Framer Motion**
* Background animado em **Canvas (HTML5)**

---

## 🚀 Tecnologias Utilizadas

### Frontend

* **React 19**
* **React Router DOM**
* **Framer Motion** (animações e scroll-based animations)
* **Tailwind CSS** (via Vite)
* **TypeScript**

### Formulários e Validação

* **React Hook Form**
* **Zod**
* **@hookform/resolvers**

### Utilitários

* **clsx** (composição de classes)
* **React Icons**
* **EmailJS** (envio de emails no formulário de contato)

---

## 🏗️ Arquitetura do Projeto

```bash
src/
├── App.tsx                 # Suspense + Router
├── router/
│   └── index.tsx           # Configuração das rotas (React Router)
├── pages/
│   └── Home/
│       └── index.tsx       # Página principal
├── Layout/
│   ├── AnimatedBackground/ # Background animado com Canvas
│   └── components/         # Header, Footer, Terminal, Sections
├── components/
│   └── Loading/            # Fallback de carregamento
└── main.tsx                # Entry point
```

### 📌 Decisões Arquiteturais

* **Separação clara de responsabilidades** entre `pages`, `Layout` e `components`
* Uso de **Layout como camada estrutural**, isolando elementos visuais globais
* Componentes reutilizáveis e desacoplados
* Estrutura preparada para crescimento sem refatorações grandes

---

## 🔀 Roteamento e Lazy Loading

Mesmo sendo uma landing page, o projeto utiliza **React Router** para:

* Preparar a aplicação para múltiplas páginas futuramente
* Facilitar manutenção e escalabilidade

A página `Home` é carregada via **lazy loading**:

* Redução do bundle inicial
* Melhor performance percebida
* Fallback visual com componente `Loading`

---

## 🎨 Layout, UX e Animações

* Layout **mobile-first**
* Navegação por âncoras com scroll suave
* Animações de entrada controladas por **Intersection Observer** (`useInView`)
* Uso de **Framer Motion** para animações declarativas

### 🎥 Background Animado

O background é renderizado em **Canvas**, com:

* Partículas dinâmicas
* Conexões entre vértices
* Elementos textuais e símbolos tecnológicos
* Ajustes automáticos para mobile e desktop

Tudo otimizado para manter performance e fluidez.

---

## 🔍 SEO, Semântica e Boas Práticas

* Uso de **HTML semântico** (`header`, `main`, `section`, `footer`)
* Hierarquia correta de títulos
* Estrutura preparada para boas métricas de **Lighthouse**
* Código organizado e legível

---

## 🛠️ Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/debs-veras/landing-page.git

# Entre na pasta
cd landing-page

# Instale as dependências
npm install

# Ambiente de desenvolvimento
npm run dev

# Build de produção
npm run build
```

---

## 📈 Possíveis Evoluções

* Separação por **feature-based architecture**
* Testes automatizados (Testing Library)
* Migração do formulário para backend próprio
* Implementação de SSR/SSG com Next.js
* Internacionalização (i18n)

---

## 🎯 Objetivo do Projeto

Demonstrar domínio de **frontend moderno**, com foco em **arquitetura**, **animações**, **performance** e **experiência do usuário**.

---

## 👩‍💻 Autora

**Débora Hellen**
Frontend Developer

---

⭐ Se este projeto chamou sua atenção, considere deixar uma estrela no repositório!
