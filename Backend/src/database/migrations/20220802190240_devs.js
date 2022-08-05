exports.up = function (knex) {
  return knex.schema.createTable("devs", (table) => {
    table.increments();
    table.string("nome").notNullable();
    table.string("sobrenome").notNullable();
    table.string("sexo").notNullable();
    table.date("data_nascimento").notNullable();
    table.integer("idade").notNullable();
    table.string("equipe").notNullable();
    table.integer("niveis_id").notNullable();
    table.foreign("niveis_id").references("id").inTable("niveis");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("devs");
};
