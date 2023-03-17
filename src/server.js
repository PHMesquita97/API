//Criar o EXPRESS (biblioteca)
const { response } = require("express");
const express = require("express");
//Inicializar o Express
const app = express();
//Método POST
app.post("/users", (request, response) => {
    
    response.send("Você chamou o POST");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));