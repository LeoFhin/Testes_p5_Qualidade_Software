# language: pt
Funcionalidade: Busca na Wikipédia
  Como usuário
  Quero pesquisar artigos
  Para encontrar conhecimento

  Contexto:
    Dado que estou na página inicial da Wikipédia

  # Cenário 1
  Cenario: Buscar por termo exato
    Quando pesquiso pelo termo "Brasil"
    Então devo ver o título do artigo contendo "Brasil"

  # Cenário 2
  Cenario: Buscar por termo inexistente
    Quando pesquiso pelo termo "XyzKlingon123456464654"
    Então devo ver uma mensagem de que nada foi encontrado

  # Cenário 3
  Cenario: Validar caixa de busca vazia
    Quando pesquiso pelo termo "{enter}"
    Então devo permanecer na home ou ir para página de pesquisa