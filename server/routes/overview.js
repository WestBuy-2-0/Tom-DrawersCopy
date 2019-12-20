const Router = require("express-promise-router");

const db = require("../db");
const faker = require('faker');

const router = new Router();

module.exports = router;

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const description = await db.query({
//     text: "SELECT text FROM descriptions WHERE product_id = $1",
//     values: [id]
//   });
//   const features = await db.query({
//     text:
//       "SELECT id AS feature_id, feature_name, feature_description FROM features WHERE product_id = $1",
//     values: [id]
//   });
//   const whats_included = await db.query({
//     text: "SELECT item_name FROM whats_included WHERE product_id = $1",
//     values: [id],
//     rowMode: "array"
//   };
//   const overview = {
//     description: description.rows[0].text,
//     features: features.rows,
//     whats_included: whats_included.rows.map(item => item[0])
//   };
//   res.send(overview);
// });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  let random = 3;
  //
  const description = faker.lorem.sentences(5);

  const features = [];
  const count = (random % 3) + 1;

  for (let i = 0; i < count; i++) {
    features.push({
      feature_id: i,
      feature_name: faker.company.catchPhrase(),
      feature_description: faker.lorem.sentence()
    });
  }

  const whats_included = [];
  const addons = (random % 3) + 3;

  for (let i = 0; i < addons; i++) {
    whats_included.push(faker.lorem.sentence());
  }

  const overview = {
    description,
    features,
    whats_included
  };

  res.send(overview);
});
