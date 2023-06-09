const { createUser } = require("../repositories/users.repository");

class UserServices {
  static async createNewUser(newUser) {
    try {
      const user = await createUser(newUser);
      return user;
    } catch (err) {
      throw err;
      // aqui no gestionamos el error, lo lanzamos para que alguien mas lo atrape
    }
  }
}

module.exports = UserServices;
// Este servicio lo vamos a usar en nuestro controlador.
