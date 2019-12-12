const Router = require("express-promise-router");

const db = require("../db");

const router = new Router();

module.exports = router;

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const description = await db.query({
    text: "SELECT text FROM descriptions WHERE product_id = $1",
    values: [id]
  });
  const features = await db.query({
    text:
      "SELECT id AS feature_id, feature_name, feature_description FROM features WHERE product_id = $1",
    values: [id]
  });
  const whats_included = await db.query({
    text: "SELECT item_name FROM whats_included WHERE product_id = $1",
    values: [id],
    rowMode: "array"
  });
  const overview = {
    description: description.rows[0].text,
    features: features.rows,
    whats_included: whats_included.rows.map(item => item[0])
  };
  res.send(overview);
});
