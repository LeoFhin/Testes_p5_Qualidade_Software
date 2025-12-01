# language: pt
Funcionalidade: Validação de Conteúdo
  Como leitor
  Quero garantir que os dados estão corretos
  Para confiar na enciclopédia

  Contexto:
    Dado que estou na página inicial da Wikipédia

  # Cenário 6
  Cenario: Validar dados da Infobox do Brasil
    Quando pesquiso pelo termo "Brasil"
    Então na tabela de informações o campo "Capital" deve conter "Brasília"

  # Cenário 7
  Cenario: Verificar existência da seção "História" no artigo de Futebol
    Quando pesquiso pelo termo "Futebol"
    Então devo ver a seção "História" no índice

  # Cenário 8
  Cenario: Verificar existência da seção "Origem do nome" no artigo de Futebol
    Quando pesquiso pelo termo "Futebol"
    Então devo ver a seção "Origem do nome" no índice

  # Cenário 9
  Cenario: Verificar existência de versão em Inglês
    Quando pesquiso pelo termo "Futebol"
    Então devo ver um link para a versão em "English"

  # Cenário 10
  Cenario: Verificar existência de versão em Francês
    Quando pesquiso pelo termo "Futebol"
    Então devo ver um link para a versão em "Français"

  # Cenário 11
  Cenario: Verificar existência de versão em Espanhol
    Quando pesquiso pelo termo "Futebol"
    Então devo ver um link para a versão em "Español"

