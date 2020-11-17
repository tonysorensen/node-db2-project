
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 1, make: 'Chevy', model: "Tahoe", mileage:296457},
        {vin: 2, make: 'Ford', model: "F150", mileage:282447},
        {vin: 3, make: 'Dodge', model: "Durango", mileage:195448}
      ]);
    });
};
