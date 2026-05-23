# Lean Giraldes — Site Pessoal

> **"Modernizando empresas familiares."**

Site premium de marca pessoal para Lean Giraldes — consultor de branding, posicionamento e tecnologia para empresas familiares.

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [Next.js 15](https://nextjs.org/) | Framework React com App Router |
| [React 19](https://react.dev/) | Interface de usuário |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS 3](https://tailwindcss.com/) | Estilização utilitária |
| [Framer Motion 11](https://www.framer.com/motion/) | Animações e microinterações |
| [Lucide React](https://lucide.dev/) | Ícones clean e modernos |

---

## 🚀 Como instalar e rodar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# 1. Entre na pasta do projeto
cd lean-giraldes

# 2. Instale as dependências
npm install

# 3. Crie o arquivo de variáveis de ambiente
cp .env.example .env.local

# 4. Edite o .env.local com seus dados reais

# 5. Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

```bash
npm run dev      # Desenvolvimento local
npm run build    # Build de produção
npm run start    # Servidor de produção (após build)
npm run lint     # Verificação de código
```

---

## 📁 Estrutura de pastas

```
lean-giraldes/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Metadata SEO, fonte, configuração global
│   │   ├── page.tsx            ← Página principal (monta todas as seções)
│   │   └── globals.css         ← Estilos globais e tokens de design
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      ← Navegação fixa com menu mobile
│   │   │   └── Footer.tsx      ← Rodapé com links sociais
│   │   │
│   │   ├── sections/           ← Seções da página (em ordem)
│   │   │   ├── Hero.tsx        ← Seção inicial impactante
│   │   │   ├── About.tsx       ← Sobre mim
│   │   │   ├── Philosophy.tsx  ← Filosofia / frases da marca
│   │   │   ├── Services.tsx    ← Serviços oferecidos
│   │   │   ├── Cases.tsx       ← Cases e portfólio
│   │   │   ├── Process.tsx     ← Etapas do processo
│   │   │   ├── Technology.tsx  ← Ferramentas e tecnologias
│   │   │   └── CTA.tsx         ← Chamada final para ação
│   │   │
│   │   └── ui/                 ← Componentes reutilizáveis
│   │       ├── SectionTitle.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── CaseCard.tsx
│   │       └── ProcessStep.tsx
│   │
│   ├── data/                   ← Dados editáveis (textos, links, etc.)
│   │   ├── services.ts         ← Lista de serviços
│   │   ├── cases.ts            ← Lista de cases
│   │   ├── process.ts          ← Etapas do processo
│   │   └── philosophy.ts       ← Frases da filosofia
│   │
│   └── lib/
│       └── utils.ts            ← Funções utilitárias
│
├── public/                     ← Arquivos estáticos (imagens, favicon)
├── .env.example                ← Template de variáveis de ambiente
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ Como alterar conteúdo

### Textos e frases

| O que alterar | Onde editar |
|---|---|
| Serviços | `src/data/services.ts` |
| Cases / portfólio | `src/data/cases.ts` |
| Etapas do processo | `src/data/process.ts` |
| Frases da filosofia | `src/data/philosophy.ts` |
| Texto "Sobre" | `src/components/sections/About.tsx` |
| Headline do Hero | `src/components/sections/Hero.tsx` |
| Texto do CTA final | `src/components/sections/CTA.tsx` |
| Título e descrição SEO | `src/app/layout.tsx` |

### Links de contato

Edite os links em dois lugares:
1. `src/components/sections/CTA.tsx` — links de WhatsApp e e-mail
2. `src/components/layout/Footer.tsx` — links das redes sociais

Ou use variáveis de ambiente (`.env.local`).

### Cores do site

As cores principais estão em `src/app/globals.css` (variáveis CSS):

```css
:root {
  --accent: #2563eb;          /* Azul principal — mude aqui */
  --bg-primary: #080808;      /* Fundo escuro */
  --text-primary: #f0f0f0;    /* Texto principal */
}
```

Para cores do Tailwind, edite `tailwind.config.ts`.

### Links de navegação

Edite o array `navLinks` em `src/components/layout/Header.tsx`.

---

## 🌐 Deploy na Vercel

### Opção A — Painel da Vercel (recomendado)

1. Suba o código no GitHub (veja abaixo)
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em **"Add New Project"**
4. Importe o repositório do GitHub
5. Framework: **Next.js** (detectado automaticamente)
6. Clique em **"Deploy"**

### Opção B — Vercel CLI

```bash
# Instalar CLI
npm install -g vercel

# Login
vercel login

# Deploy (segue o wizard)
vercel

# Deploy de produção
vercel --prod
```

---

## 📦 Deploy no GitHub

```bash
# 1. Inicializar repositório local
git init
git add .
git commit -m "Initial commit - Lean Giraldes website"

# 2. Criar repositório no GitHub e subir
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/lean-giraldes.git
git push -u origin main
```

---

## 🔐 Variáveis de Ambiente

Copie `.env.example` como `.env.local` e preencha:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5518999999999
NEXT_PUBLIC_EMAIL=seuemail@gmail.com
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/seuusuario
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/seuusuario
NEXT_PUBLIC_SITE_URL=https://leangiraldes.com
```

> ⚠️ Nunca envie o `.env.local` ao GitHub. Ele já está no `.gitignore`.

---

## 📄 Licença

Projeto privado — Lean Giraldes © 2025. Todos os direitos reservados.
