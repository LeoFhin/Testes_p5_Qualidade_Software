# language: pt
Funcionalidade: Validação de Conteúdo
  Como leitor
  Quero garantir que os dados estão corretos
  Para confiar na enciclopédia

  Contexto:
    Dado que estou na página inicial da Wikipédia

  # Cenário 4
  Cenario: Validar dados da Infobox do Brasil
    Quando pesquiso pelo termo "Brasil"
    Então na tabela de informações o campo "Capital" deve conter "Brasília"

  # Cenário 5
  Cenario: Verificar existência de versão em Inglês
    Quando pesquiso pelo termo "Futebol"
    Então devo ver um link para a versão em "English"

  # Cenário 6
  Cenario: Verificar existência de versão em Francês
  Quando pesquiso pelo termo "Futebol"
  Então devo ver um link para a versão em "Français"

  # Cenário 7
  Cenario: Verificar existência de versão em Espanhol
  Quando pesquiso pelo termo "Futebol"
  Então devo ver um link para a versão em "Español"

  