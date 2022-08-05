const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { nome, sobrenome, sexo, data_nascimento, idade, equipe, niveis_id } =
      request.body;

    await connection("devs").insert({
      nome,
      sobrenome,
      sexo,
      data_nascimento,
      idade,
      equipe,
      niveis_id,
    });

    return response.status(201).json({
      message: "success",
    });
  },

  async index(request, response) {
    const devs = await connection("devs")
      .join("niveis", "niveis.id", "=", "devs.niveis_id")
      .select(["devs.*", "niveis.nivel"])
      .orderBy("nome", "asc");

    return response.status(200).json(devs);
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection("devs").where("id", id).delete();

    return response.status(204).send();
  },

  async show(request, response) {
    const { id } = request.params;

    const dev = await connection("devs")
      .join("niveis", "niveis.id", "=", "devs.niveis_id")
      .select(["devs.*", "niveis.nivel"])
      .where("devs.id", id)
      .first();

    return response.json(dev);
  },

  async update(request, response) {
    const { id } = request.params;

    const data = request.body;

    await connection("devs").where("id", id).update(data);

    return response.status(200).json({ message: "success" });
  },
};
