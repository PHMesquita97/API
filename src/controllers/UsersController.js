//Class permite dentro dela criar e acessar VÁRIAS funções.
class UsersController {
    //Tirei do users.routers, então preciso fazer com que ela seja chamada lá.
    create(request, response) {
        const { name, email, password } = request.body;

        response.json({name, email, password});
    }
}

module.exports = UsersController;
