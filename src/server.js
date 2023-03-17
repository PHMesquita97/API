//Criar o EXPRESS (biblioteca)
const express = require("express");
//Inicializar o Express
const app = express();

// para cada Request, precisa ter um parametro. Feito pelo /:
app.get("/message/:id/:user", (request, response) => {
    response.send(`
        Id da mensagem: ${request.params.id}.
        Para o usuário: ${request.params.user}    
    `);
})
//definir a porta que a api vai observar.
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));