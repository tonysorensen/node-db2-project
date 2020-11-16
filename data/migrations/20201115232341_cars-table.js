
exports.up = function(knex) {
    
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.string("vin", 17).notNullable();
        tbl
          .string("make", 25)
          .notNullable()
          .index();
    
        tbl
          .string("model", 255)
          .notNullable()
          .index();
    
        tbl.integer("mileage", 9).notNullable();
    
        tbl.string("transmission", 25).index();
    
        tbl.string("title", 25).index();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
