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


IMPORTANTE:
AS INFORMAÇÔES SÃO ENVIADAS PARA A API ATRAVES DA ROTA! (ROTA=>URL)
===========================

Para cada Request, precisa haver um parametro definido no código.

fazemos isso pelo /: 

=====================================

    QUERY PARAMS
outra estratégia para enviar e receber valores da API.

ROTA => https:// enderecoservidor.com.br/users?page=2


? => é o simbolo para o QUERY.
PAGE => é o nome do QUERY
= => atribui um valor para o Query. neste exemplo PAGE tem o VALOR 2.

Para passar mais de um QUERY usamos o simbolo & e então segue a mesma estrutura NOME do QUERY e VALOR.

EX: https:// enderecoservidor.com.br/users?page=2&limit=10

DIFERENÇA ENTRE QUERY E ROUTE PARAMS 
Os endereços dos parametros não precisam estar especificados no código.

No ROUTE PARAMS a rota precisa conter todos os paramentros que estão no código.

Na QUERY PARAMS, isso é flexivel/ opcional !

=====================================
Como reiniciar o servidor automaticamente, a cada alteração no código.

Istalar o nodemon

npm install nodemon --sav-dev

o --save-dev é justamente o que salva o desenvolvimento do código.

======================================
EM PACKAGE.JSON 
criamos um novo scrip para que o servidor rode dessa maneira apenas no desenvolvimento.

"dev": "nodemon ./src/server.js"

com isso para eu roda o servidor agora no terminal digito : npm run dev

======================================
Os Navegadores só aceitam GET.
para testar os outros métodos precisamos utilizar outras ferramentas.
vamos usar o Insomnia.
======================================
MÉTODO POST
Geralmente usado para CADASTRAR informações.
cadastro de usuário, produto, etc.

Routes=> rotas do projeto. 
Controllers=> parte responsavel por processar as requisições da aplicação. É a camada que EXECUTA o que o usuário pede.


=========CONTROLLERS=========
//PADRÃO DE BOA PRATICA: Cada controller não pode ter mais que 5 métodos.
    /*
        * index - GEt para listar vários registros.
        * show -  GET exibir um registro especifico.
        * create - POST para criar um registro.
        * update - PUT para atualizar um registro.
        * delete - DELETE para remover um registro.
    */

    // Se for preciso criar mais do 5, siginifica que vale a pena criar outro controlador.

=========Middleware=========

Ex: temos um site com varias funçoes, uma delas é cadastrar novos produtos.
Quando alguem clicar em cadastrar um novo produto: site ====> Request ====== back-end===> newProduct()

o Middleware é como se fosse uma inspeção de segurança.

Middleware são funções que tem acsso ao objeto de solicitação (requisição), o objetivo de Resposta (resposta), e a proxima função de middleware no ciclo "solicitação-resposta" do app.

A próxima função middleware é comumente denotada por uma variável chamada Next.

Middleware consegue extrair: request, response e next.
next é a proxima função para a app prosseguir.

dá pra passar o Middleware para cada uma das rotas separadamente, ou para todas de uma vez só.


