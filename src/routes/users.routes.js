const {Router} = require("express");
//as duas Const são para que a modularização funcione. P/ que os arquivos em pastas diferentes se comuniquem.
const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    const { name, email, password } = request.body;

    response.json({name, email, password})
});

module.exports = usersRoutes;
