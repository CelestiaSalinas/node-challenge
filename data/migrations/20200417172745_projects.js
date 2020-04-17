
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable()
        tbl.string("description")
        tbl.boolean("completed").defaultTo(false).notNullable()
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name").notNullable()
        tbl.string("description")
    })
    .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description").notNullable().unique();
        tbl.string("notes")
        tbl.boolean("completed").defaultTo(false).notNullable()
        tbl
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      tbl.integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  })
  };
  
  exports.down = function(knex) {
    return knex.schema
  };
  