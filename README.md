# Portfolio Personal & Full Stack Engineering Showcase

Uma plataforma web moderna e responsiva construída para centralizar projetos de desenvolvimento, experimentos de interface de usuário (UI/UX) e soluções de automação/back-end.

O projeto combina animações interativas em 3D, consumo de APIs assíncronas, manipulação dinâmica de temas (Dark/Light) e layout fluidamente adaptável para múltiplos tamanhos de tela.

---

## 🛠 Tech Stack & Arquitetura

### **Front-End & Interface**
* **HTML5 Semântico:** Estruturação focada em acessibilidade e escaneabilidade SEO.
* **CSS3 Avançado & Design System:**
  * Layouts responsivos construídos com Flexbox e CSS Grid.
  * Media queries para breakpoints estratégicos (`max-width: 1050px`, `768px-1024px`, `540px` e `240px`).
  * Efeitos visuais modernos (*Glassmorphism*, transições suaves, variáveis globais).
  * Tema claro/escuro dinâmico via alteração de atributos no elemento raiz (`document.documentElement`).
* **JavaScript (ES6+) Manipulação do DOM:**
  * Efeito de digitação (*typing effect*) com intervalo aleatório/humanizado no título principal.
  * Lógica customizada para fechamento e alternância de estado da navegação mobile.
  * Integração com bibliotecas externas:
    * **[Spline 3D Viewer](https://spline.design/):** Renderização de elemento 3D interativo via Web Component no Hero (`@splinetool/viewer`).
    * **[SwiperJS](https://swiperjs.com/):** Carrossel interativo de projetos com *infinite loop*, *autoplay* sem interrupção e suporte a *touch/drag*.
    * **[ScrollReveal](https://scrollrevealjs.org/):** Revelação progressiva de elementos durante a rolagem com controle de atraso e direções.

### **Back-End & Ecossistema de Engenharia**
* **Python:** Desenvolvimento de automações (Sistemas SMTP/SendMail), jogos baseados em POO e lógica bancária desktop (CustomTkinter).
* **Bancos de Dados Relacionais:** Modelagem e manipulação de dados utilizando **PostgreSQL** e armazenamento seguro de senhas com *hash*.

---

## 📂 Projetos em Destaque

| Projeto | Tecnologia Principal | Descrição Técnica |
| :--- | :--- | :--- |
| **[SendMail](https://github.com/NataOliveira/Project-SendMail)** | Python (SMTP / JSON) | Sistema automatizado para disparo de e-mails dinâmicos. Faz validação de sintaxe, leitura de base JSON, tratamento de histórico para evitar disparos duplicados e conexão segura via SMTP. |
| **[RPG Game em POO](https://github.com/NataOliveira/Jogo-RPG-em-POO)** | Python (POO) | Jogo de RPG em turno executado diretamente no terminal, aplicando conceitos de Herança, Polimorfismo e Encapsulamento. |
| **[Sistema de Login e Cadastro](https://github.com/NataOliveira/Projeto_Login_e_cadastro)** | Python / PostgreSQL | Aplicação desktop feita com CustomTkinter com persistência em banco de dados relacional e criptografia/hashing de credenciais. |
| **[API Use Case](https://nataoliveira.github.io/API-Use-Case/)** | JS (ES6+) / REST API | Consumo assíncrono de APIs RESTful usando `fetch`/`async-await`, renderizando dados dinamicamente em uma interface responsiva. |
| **[Cordel Digital](https://nataoliveira.github.io/Cordel/)** | HTML5 / CSS3 | Projeto focado em tipografia e efeitos visuais imersivos em CSS, adaptado à literatura de cordel brasileira. |
| **[Dreyfus Bank UI](https://nataoliveira.github.io/Banco-Dreyfus/)** | HTML5 / CSS3 | Interface de autenticação focada em usabilidade, microinterações e padrão visual institucional. |

---

## ⚡ Recursos Técnicos e UX Implemented

1. **Dark/Light Mode Dinâmico:**
   * Script JS que checa a cor do background computada no documento (`getComputedStyle`) e alterna o atributo `tema="light"`, permitindo trocar estilos de cores globais com apenas um clique.
2. **Hero Interativo 3D:**
   * Carregamento sob demanda do modelo 3D via Spline Viewer sem impactar a rolagem da página.
3. **Menu Mobile Adaptável:**
   * Menu estilo *hambúrguer* com animação de visibilidade e fechamento automático ao selecionar qualquer link ou clicar fora da barra.
4. **Gradiente de Animação Typographic:**
   * Algoritmo JS simulando padrão natural de digitação humana com variação randômica de tempo por caractere e pausas em pontuações.

---

## ⚙️ Como Executar o Projeto Localmente

Como se trata de um projeto majoritariamente Front-End de apresentação, não há necessidade de instalação de dependências via gerenciador de pacotes (`npm` ou `yarn`).

### **Passos:**

1. Clone este repositório:
   ```bash
   git clone [https://github.com/NataOliveira/portfolio.git](https://github.com/NataOliveira/portfolio.git)