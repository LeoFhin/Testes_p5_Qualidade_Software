# Testes_p5_Qualidade_Software

Projeto final de testes unitários da cadeira de Qualidade de Software p5.

Este repositório contém a automação de testes **End-to-End (E2E)** para o site da Wikipédia, utilizando boas práticas de desenvolvimento, padrão Page Objects e BDD.

## 🛠 Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/):** Framework de testes automatizados.
* **[Cucumber](https://cucumber.io/):** Escrita dos cenários em linguagem natural (Gherkin).
* **JavaScript:** Linguagem de programação.
* **Node.js:** Ambiente de execução.

## 🏗 Arquitetura do Projeto

O projeto segue o padrão **Page Object Model (POM)** para garantir organização, reaproveitamento de código e fácil manutenção.

```text
📦 cypress
 ┣ 📂 e2e
 ┃ ┣ 📂 features       # Cenários de teste escritos em Gherkin (.feature)
 ┃ ┗ 📂 steps          # Conexão entre o Gherkin e o código JavaScript
 ┣ 📂 pages            # Page Objects (Mapeamento de elementos e ações)
 ┣ 📂 fixtures         # Arquivos de dados estáticos (Mocks)
 ┗ 📂 support          # Configurações globais e comandos customizados

## ✅ Cenários Cobertos

Foram implementados testes focados na experiência do usuário na Wikipédia:

* **Busca:**
  * Pesquisa com termo exato.
  * Validação de tratamento para termos inexistentes.
* **Navegação:**
  * Acesso ao menu de "Página Aleatória".
  * Navegação para o "Portal Comunitário".
  * Validação da seção fixa "Artigo em Destaque".
* **Conteúdo:**
  * Validação de títulos de artigos.
  * Verificação de dados na tabela de informações (InfoBox).
  * Validação de links para outros idiomas (Internacionalização).

## 🚀 Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina.

### Instalação
Abra o terminal na pasta do projeto e execute:

```bash
npm install

## ✒️ Autores

* **Leonardo Santos**
* **Lucas Viana**
* **Miguel Rodrigues**
* **Saulo Pinto**
* **Victor Jairo**
* **Luana campos Ferreira**
* **Itaji de Carvalho Brito**
---
Desenvolvido para a disciplina de Qualidade de Software.
