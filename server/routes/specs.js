const Router = require("express-promise-router");
const faker = require('faker');

const db = require("../db");

const router = new Router();

module.exports = router;

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const key_specs = await db.query({
//     text:
//       "SELECT id AS spec_id, spec_name, spec_value, has_more_info, more_info_text FROM specs WHERE product_id = $1 AND spec_category = 'Key Specs'",
//     values: [id]
//   });
//   const general = await db.query({
//     text:
//       "SELECT id AS spec_id, spec_name, spec_value, has_more_info, more_info_text FROM specs WHERE product_id = $1 AND spec_category = 'General'",
//     values: [id]
//   });
//   const warranty = await db.query({
//     text:
//       "SELECT id AS spec_id, spec_name, spec_value, has_more_info, more_info_text FROM specs WHERE product_id = $1 AND spec_category = 'Warranty'",
//     values: [id]
//   });
//   const other = await db.query({
//     text:
//       "SELECT id AS spec_id, spec_name, spec_value, has_more_info, more_info_text FROM specs WHERE product_id = $1 AND spec_category = 'Other'",
//     values: [id]
//   });

//   const specs = { product_id: id, key_specs: key_specs.rows, general: general.rows, warranty: warranty.rows, other: other.rows};
//   res.send(specs);
// });

router.get('/:id', (req, res) => {
  let random = 3;
  let id = 5;
  //
  let count = 0;

  const key_specs = [];
  const keyCount = (random % 3) + 2;

  for (let i = count; i < keyCount; i++, count++) {
    key_specs.push({
      spec_id: count,
      spec_name: faker.company.catchPhrase(),
      spec_value: faker.lorem.sentence(),
      has_more_info: (random + 3) % 2 === 0,
      more_info_text: (random + 1) % 2 === 0 ? faker.lorem.sentence() : null
    });
  }

  const general = [];
  const genCount = (random % 3) + 2 + count;
  for (let i = count; i < genCount; i++, count++) {
    general.push({
      spec_id: count,
      spec_name: faker.company.catchPhrase(),
      spec_value: faker.lorem.sentence(),
      has_more_info: (random + 4) % 2 === 0,
      more_info_text: (random + 1) % 2 === 0 ? faker.lorem.sentence() : null
    });
  }

  const warranty = [];
  const warrCount = (random % 3) + 1 + count;
  for (let i = count; i < warrCount; i++, count++) {
    warranty.push({
      spec_id: count,
      spec_name: `WARRANTY: ${faker.company.bs()}`,
      spec_value: faker.lorem.sentence(),
      has_more_info: (random + 1) % 2 === 0,
      more_info_text: (random + 3) % 2 === 0 ? faker.lorem.sentence() : null
    });
  }

  const other = [];
  const otherCount = (random % 5) + count;
  for (let i = count; i < otherCount; i++) {
    other.push({
      spec_id: count,
      spec_name: `${faker.company.bs()}`,
      spec_value: faker.lorem.sentence(),
      has_more_info: (random + 2) % 2 === 0,
      more_info_text: (random + 1) % 2 === 0 ? faker.lorem.sentence() : null
    });
  }

  const specs = {
    product_id: id,
    key_specs,
    general,
    warranty,
    other
  };

  res.send(specs);
});
