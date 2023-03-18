//centraliza todas as rotas do usuário em um único arquivo. Facilita pq dessa maneira não precisa importar um por um no código. apenas o arquivo INDEX.js.

const { Router } = require("express");

const usersRouter = require("./users.routes");

const routes = Router();

routes.use("/users", usersRouter);

module.exports = routes;