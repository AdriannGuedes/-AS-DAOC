# 🚗 Revenda Volkswagen

## 📝 Descrição do Projeto

**Revenda Volkswagen** é um sistema de gerenciamento de catálogo de carros desenvolvido como um CRUD (Create, Read, Update, Delete).  
O projeto permite adicionar, editar, excluir e visualizar detalhes de carros em um catálogo.  
Cada carro contém informações como:  
- Ano  
- Modelo  
- Quilometragem  
- Foto  

É ideal para gerenciar o estoque de veículos de forma eficiente e organizada.  

O projeto é composto por duas partes principais:  
- **Frontend**: Desenvolvido em React, proporciona uma interface amigável para o usuário.  
- **Backend**: Desenvolvido em Node.js, expõe uma API RESTful para gerenciamento dos dados.

---

## 🚀 Funcionalidades

1. **Visualizar catálogo de carros**: Exibe todos os carros cadastrados com seus detalhes.
2. **Adicionar novos carros**: Permite cadastrar um veículo com as informações necessárias.
3. **Editar informações de um carro**: Atualiza os dados de um veículo existente.
4. **Excluir carros do catálogo**: Remove um veículo do sistema.

---

## 🛠️ Pré-requisitos para Executar o Projeto

Certifique-se de ter as seguintes ferramentas instaladas:  
- **Node.js** (versão 16 ou superior)  
- **MySQL** (para o banco de dados)  
- **Gerenciador de pacotes npm** (instalado com o Node.js)  

---

## ⚙️ Configuração do Ambiente

### 📂 Backend (API em Node.js)

1. Navegue até a pasta do backend:  
   ```bash
   cd backend
2. 📦 Instale as dependências:
   ```npm install

3. 🛠️ Configure o banco de dados MySQL:
- Crie um banco de dados chamado crud_cars.
- Configure as credenciais no código de conexão (arquivo index.js ou similar).

4. ▶️ Inicie o servidor:
- npm start
  
O backend estará rodando em:
🌐 http://localhost:5000 (ou outra porta configurada).

🖥️ Frontend (Interface em React)

1. 📂 Navegue até a pasta do frontend:
   - cd frontend

2. 📦 Instale as dependências:
- npm install

3. ▶️ Inicie o servidor de desenvolvimento:
- npm start

O frontend estará disponível em:
🌐 http://localhost:3000.


## 🌐 Endpoints da API
-- GET /carros: Retorna todos os carros do catálogo.
-- GET /carro/:id: Retorna os detalhes de um carro específico.
-- POST /carro: Adiciona um novo carro ao catálogo.
-- PUT /carro/:id: Atualiza as informações de um carro existente.
-- DELETE /carro/:id: Remove um carro do catálogo.


 ## 📦 Dependências do Projeto
Frontend
* @testing-library/jest-dom
* @testing-library/react
* @testing-library/user-event
* ajv
* ajv-keywords
* axios
* react
* react-dom
* react-router-dom
* react-scripts
* web-vitals

Backend
* cors
* express
* mysql2
* nodemon
