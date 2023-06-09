const UserServices = require("../services/users.services");

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    await UserServices.createNewUser(user);
    res.status(201).send();
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
};
