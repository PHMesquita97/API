//Criar o EXPRESS (biblioteca)
const { response } = require("express");
const express = require("express");
//Inicializar o Express
const app = express();

// para cada Request, precisa ter um parametro. Feito pelo /:
//para evitar a repticção de Código podemos desestruturar o request.params.
app.get("/message/:id/:user", (request, response) => {
    const {id, user} = request.params

    response.send(`
        Id da mensagem: ${id}.
        Para o usuário: ${user}    
    `);
})

app.get("/users", (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página: ${page}. Mostrar: ${limit}`);
});
//definir a porta que a api vai observar.
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));