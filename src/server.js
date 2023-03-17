//Criar o EXPRESS (biblioteca)
const express = require("express");
//Inicializar o Express
const app = express();

app.get("/message/:id", (request, response) => {
    response.send(`Id da mensagem: ${request.params.id}`)
})
//definir a porta que a api vai observar.
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));