# language: pt
Funcionalidade: Navegação Estrutural
  Como usuário
  Quero navegar pelos menus
  Para descobrir novos artigos

  Contexto:
    Dado que estou na página inicial da Wikipédia

  # Cenário 7
  Cenario: Acessar página aleatória
    Quando clico no menu "Página aleatória"
    Então a URL deve ser diferente da página inicial

  # Cenário 8
  Cenario: Verificar seção de Artigo em Destaque
    Então devo visualizar a seção de artigo em destaque na home

  # Cenário 9
  Cenario: Navegar para o Portal Comunitário
    Quando clico no menu "Portal comunitário"
    Então devo ver o título do artigo contendo "Portal comunitário"