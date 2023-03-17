Métodos de Requisições

get => Leitura
post => Criação
Put => Atualização
Delete => Declaração
Patch => Atualização Parcial

===========================

GET

Request =  o que foi pedido pelo client.

Request = obter informações que estão sendo enviadas para a API.

response = a resposta do servidor 

===========================

ROUTE PARAMS
https:// enderecoservidor.com.br/users/5

o users é o RECURSO.

o "5" é o PARAMÊTRO.


suponhamos que o '5' é o ID do usuário. 

Se eu simplesmente passar ele na rota, a aplicação não vai conseguir busca-lo, pois ela entende que ele é parte do caminho e não um PARAMENTRO.

PARA SOLUCIONAR ISSO:
a minha rota no código tem que aceitar um PARAMETRO.

/:

A sinalização com os ":" indica para a aplicação que o que vem em seguida é um Parametro.

COMO RECUPERAR A INFORMAÇÃO  E PORQUE RECUPERAR.

recuperar a informação nesse caso se refere a pegar a informação na barra de URL mandar ela para o servidor para que ele RESPONDA, de acordo com o dado. 

Então se na barra eu coloco '5' ele responde '5', se eu coloco '32' ele responde '32'.

===========================


