const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { nivel } = request.body;

    await connection("niveis").insert({
      nivel,
    });

    return response.status(201).json({
      message: "success",
    });
  },

  async index(request, response) {
    const niveis = await connection("niveis")
      .count("devs.id", { as: "quantidade" })
      .leftJoin("devs", "devs.niveis_id", "=", "niveis.id")
      .select(["devs.id", "niveis.*"])
      .groupBy("niveis.id")
      .orderBy("quantidade", "desc");
    return response.status(200).json(niveis);
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection("niveis").where("id", id).delete();

    return response.status(204).send();
  },

  async show(request, response) {
    const { id } = request.params;

    const nivel = await connection("niveis").select("*").where("id", id);

    return response.json(nivel);
  },

  async update(request, response) {
    const { id } = request.params;

    const data = request.body;

    await connection("niveis").where("id", id).update(data);

    return response.status(200).json({ message: "success" });
  },
};
