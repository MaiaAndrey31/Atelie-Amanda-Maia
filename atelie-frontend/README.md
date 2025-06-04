# 🎨 Ateliê Amanda Maia

Um e-commerce moderno e responsivo para venda de produtos artesanais personalizados, desenvolvido com React e Tailwind CSS.

## ✨ Sobre o Projeto

O Ateliê Amanda Maia é uma plataforma online especializada em:
- 🕯️ Velas personalizadas
- 🎂 Topos de bolo únicos
- 🎁 Lembrancinhas especiais
- 👨‍👩‍👧‍👦 Família personalizada
- 🎭 Funko Pop customizados
- 🔑 Chaveiros personalizados

**Slogan:** *"Sua festa começa aqui!"*

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento da aplicação
- **Context API** - Gerenciamento de estado global
- **Custom Hooks** - Lógica reutilizável
- **LocalStorage** - Persistência de dados do carrinho
- **PWA** - Progressive Web App
- **SEO Optimized** - Otimizado para mecanismos de busca

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/usuario/atelie-amanda-maia.git
cd atelie-amanda-maia
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

4. **Execute o projeto**
```bash
npm start
# ou
yarn start
```

5. **Acesse no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
atelie-amanda-maia/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/             # Páginas da aplicação
│   ├── contexts/          # Context API
│   ├── hooks/             # Custom hooks
│   ├── data/              # Dados estáticos
│   ├── utils/             # Funções utilitárias
│   ├── styles/            # Estilos globais
│   └── assets/            # Imagens e ícones
├── package.json
└── tailwind.config.js
```

## 🎨 Design System

### Paleta de Cores
- **Rosa Principal:** `#FF6B9D`
- **Roxo:** `#8B5FBF`
- **Azul Claro:** `#A8E6CF`
- **Dourado:** `#FFD700`
- **Branco:** `#FFFFFF`
- **Cinza Claro:** `#F8F9FA`

### Tipografia
- **Fonte Principal:** Poppins (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700

### Gradientes
- **Header:** `linear-gradient(135deg, #FF6B9D, #8B5FBF)`
- **Cards:** `linear-gradient(145deg, #FFFFFF, #F8F9FA)`
- **Botões:** `linear-gradient(135deg, #FF6B9D, #FF8E9B)`

## 🌟 Principais Funcionalidades

### 🛍️ Catálogo de Produtos
- Grid responsivo de produtos
- Filtros por categoria
- Sistema de busca
- Ordenação por preço/nome
- Cards com hover effects

### 🛒 Carrinho de Compras
- Adicionar/remover produtos
- Cálculo automático de totais
- Persistência no localStorage
- Finalização via WhatsApp

### 📱 Integração WhatsApp
- Botão flutuante
- Envio automático de pedidos
- Templates de mensagem personalizadas

### 📸 Galeria de Trabalhos
- Showcase de projetos anteriores
- Depoimentos de clientes
- Before/after de personalizações

### 🎯 SEO & Performance
- Meta tags otimizadas
- Open Graph para redes sociais
- Lazy loading de imagens
- Code splitting por rotas
- PWA configurado

## 📱 Responsividade

### Breakpoints
- **Mobile:** 320px - 768px (1 coluna)
- **Tablet:** 768px - 1024px (2-3 colunas)
- **Desktop:** 1024px+ (3-4 colunas)

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm start

# Build para produção
npm run build

# Testes
npm test

# Ejetar configurações (irreversível)
npm run eject

# Linting
npm run lint

# Formatação de código
npm run format
```

## 🌐 Integração com APIs

### WhatsApp Business API
- Envio automático de pedidos
- Templates de mensagem
- Links diretos com dados do carrinho

### Instagram Basic Display API
- Feed de fotos automatizado
- Stories em destaque
- Hashtags relevantes

## 📊 Analytics e Monitoramento

- Google Analytics 4
- Facebook Pixel
- Heat mapping (opcional)
- Error tracking

## 🔒 Segurança

- Validação de formulários
- Sanitização de dados
- Headers de segurança
- HTTPS obrigatório

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Arraste a pasta build para Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Amanda Maia**
- 📧 Email: contato@atelie-amanda-maia.com
- 📱 WhatsApp: (11) 99999-9999
- 📸 Instagram: [@atelie_amanda_maia](https://instagram.com/atelie_amanda_maia)

## 🙏 Agradecimentos

- Design inspirado em tendências modernas de e-commerce
- Ícones by [Lucide React](https://lucide.dev/)
- Fontes by [Google Fonts](https://fonts.google.com/)
- Paleta de cores inspirada em tons femininos e modernos

---

⭐ **Se gostou do projeto, deixe uma estrela!**

*"Transformando momentos especiais em memórias únicas"* ✨