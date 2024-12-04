# Sistema de Recomendação de Filmes

## Objetivo do Projeto
Desenvolver um sistema de recomendação de filmes que permita aos usuários pesquisar filmes, escolher o número de recomendações e obter sugestões personalizadas com base no filme pesquisado. O sistema busca proporcionar uma experiência prática e eficiente na busca por recomendações cinematográficas.

---

## Escopo
- **Frontend**:
  - Interface de pesquisa com campo para nome do filme.
  - Opção para definir a quantidade de recomendações.
  - Exibição das recomendações recebidas do backend.
  - Layout responsivo e moderno.

- **Backend**:
  - Processamento da lógica de recomendação de filmes.
  - API REST para comunicação entre frontend e backend.
  - Carga de dados de um banco de filmes em formato CSV.

---

## Funcionalidades
- Pesquisa de filmes pelo nome.
- Definição da quantidade de recomendações desejadas (1 a 12).
- Retorno de recomendações personalizadas baseadas no filme pesquisado.
- Exibição das recomendações em uma interface amigável.

---

## Tecnologias Utilizadas

### **Frontend**
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Biblioteca para realizar requisições HTTP ao backend.
- **CSS Puro**: Estilização das páginas para garantir um layout limpo e responsivo.

### **Backend**
- **Flask**: Framework Python para construção de APIs REST.
- **Pandas**: Biblioteca Python para manipulação e análise de dados.
- **Scikit-Learn**: Biblioteca Python para implementação da lógica de recomendação com o algoritmo KNN.

### **Teste e Qualidade**
- **Postman**: Testes manuais da API REST.
- **Console Logs**: Monitoramento do comportamento do sistema durante o desenvolvimento.

---

## Requisitos do Projeto

### **Requisitos Funcionais**
- **RF1**: O sistema deve permitir pesquisar filmes pelo nome.
- **RF2**: O sistema deve oferecer a opção de definir o número de recomendações (mínimo de 1 e máximo de 12).
- **RF3**: O sistema deve retornar as recomendações com base no filme pesquisado.
- **RF4**: A interface deve exibir as recomendações de forma clara e amigável.

### **Requisitos Não Funcionais**
- **RNF1**: A API deve responder às requisições em no máximo 2 segundos.
- **RNF2**: O sistema deve ser responsivo, permitindo o uso em dispositivos móveis.
- **RNF3**: A aplicação deve ser intuitiva e fácil de usar.
- **RNF4**: Garantir a manutenibilidade do código através de boas práticas de organização e documentação.

---

## Fluxo de Uso
1. O usuário acessa a interface e digita o nome de um filme.
2. Define o número de recomendações desejadas (padrão: 5).
3. Clica no botão "Buscar".
4. O sistema exibe as recomendações recebidas do backend.
5. Caso nenhum filme seja encontrado, uma mensagem amigável é exibida.

---

## Instruções para Configuração e Execução

### **Configuração Inicial**
Faça o clone do repositório:
```bash
git clone https://github.com/seu-usuario/movie-recommender-system.git
