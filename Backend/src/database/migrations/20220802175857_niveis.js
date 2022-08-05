exports.up = function (knex) {
  return knex.schema.createTable("niveis", (table) => {
    table.increments();
    table.string("nivel").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("niveis");
};
