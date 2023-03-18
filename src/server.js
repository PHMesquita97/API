//Criar o EXPRESS (biblioteca)
const { response } = require("express");
const express = require("express");
//Inicializar o Express
const app = express();
//A API precisa saber qual é o tipo de dado ou pádrão que ela vai receber as informações. Por isso essa linha de código abaixo. 
app.use(express.json())
//Método POST
app.post("/users", (request, response) => {
    const { name, email, password } = request.body;
    //SEND mostra como HTML
    /*
    response.send(`Usuário: ${name}. E-mail: ${email}. E a senha é: ${password}`);*/
    //Se Usar Json mostrará Json
    response.json({name, email, password})
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));