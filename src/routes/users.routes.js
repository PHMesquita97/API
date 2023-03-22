const {Router} = require("express");
//importar!
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

/* Middleware consegue extrair: request, response e next.
next é a proxima função para a app prosseguir*/
function myMiddleware(request, response, next){
 console.log("Você passou pelo Middleware!");
 /* sem uma função next aqui, o servidor vai ficar buscando para sempre o que fazer em seguida e não vai achar. por isso precisamos coloca-la aqui.*/
 console.log(request.body);
 /*as informaçoes do body no terminal*/

 if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"})
 }
 /* dessa maneira se for admin, as informações vão aparecer na aplicação, mas se isAdmin for False então apenas a mensagem de não autorizado irá acontecer. O return está ali para parar a função caso seja Falso.*/
 
 next();
 /*Agora com o next, a mensagem aparece no terminal e o servidor devolve as informações e a aplicação mostra o resultado*/
 /* se ficar com duvida comente o NEXT(); e olhe a aplicação*/

}


const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;

