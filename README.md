# Desafio MB Web

API RESTful para cadastro de usuario do tipo Pessoa Física e Pessoa Jurídica.

## **Topicos**
1. Tecnologias e Libs.
2. Instalação
3. Estrutura do Projeto.

---

## **1. Tecnologias Utilizadas**
- **Node.js**
- **Express**
- **Vue.js 3**

---

## **2. Instalação**

### **Pré-requisitos**
- Node.js versão 22+.
- npm (gerenciador de pacotes).

### **Passo a Passo**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/laercio-nogueira/mb-web.git
   cd ./mb-web
   ```

2. Instale as dependencias (Execute na raiz do projeto)
   ```bash
   npm install
   ```

3. Instale as dependencias do Frontend (Execute na raiz do projeto)
   ```bash
   cd ./client && npm install
    ```

4. Instale as dependencias do Backend (Execute na raiz do projeto)
    ```bash
    cd ./bff && npm install
    ```

5. Inicie a aplicação em modo de Produção (Execute na raiz do projeto)
    ```bash
      npm run start
    ```

6. Ou inicie a aplicação em modo de Desenvolvimento (Execute na raiz do projeto)
    ```bash
      npm run dev
    ```

6. A aplicação estará disponível em:
  - http://localhost:3000

---

## **3. Estrutura do Projeto**
```ruby
MB-WEB/
├── bff/                         # Backend For Frontend (Node.js)
│   ├── dist/                    # Arquivos compilados do Frontend
│   ├── node_modules/            
│   ├── src/                     
│   │   ├── controllers/         # Lógica dos controladores (entrada das requisições)
│   │   ├── middleware/          # Middlewares de autenticação, logs, etc.
│   │   ├── usecases/            # Casos de uso (regras de negócio)
│   │   │   └── registerUseCase.js
│   │   ├── views/               # Views (templates HTML) renderização de views
│   │   ├── router.js            # Definições de rotas do BFF
│   │   └── index.js             # Ponto de entrada do BFF
│   ├── package.json             # Dependências e scripts do BFF
│   └── package-lock.json
│
├── client/                     # Aplicação Frontend      
│   ├── node_modules/           
│   ├── src/                    
│   │   ├── api/                # Serviços de integração com a API
│   │   ├── assets/             # SASS
│   │   ├── components/         # Componentes reutilizáveis do Vue
│   │   ├── pages/              # Páginas do aplicativo
│   │   ├── App.vue             # Componente raiz
│   │   └── main.js             # Ponto de entrada do app Vue
│   ├── index.html              # HTML principal
│   ├── jsconfig.json           # Configuração de paths para o JS
│   ├── package.json            # Dependências e scripts do Frontend
│   ├── package-lock.json
│   ├── vite.config.js          # Configuração do bundler Vite
│   ├── .editorconfig
│   ├── .gitattributes
│   ├── .prettierrc.json
│   └── eslint.config.js
│
├── node_modules/               
├── .gitignore
├── instructions.md             # Instruções para o desenvolvimento
├── package.json                # Dependências e scripts do projeto
├── README.md                   # Instructions do projeto
├── .gitignore
```

---
## **4. Validações**
- **Validação de CPF e CNPJ com Mascara (obrigatório)**<br>
- **Nome e sobrenome validado pelo backend (obrigatório)**<br>
- **Datas sao obrigatória (obrigatório)**<br>
- **Senha de 6 digitos (obrigatório)**<br>
- **Email com mascara e Regex (obrigatório)**<br>
- **Telefone aceito celular e fixo (obrigatório)**<br>

