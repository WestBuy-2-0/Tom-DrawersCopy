const Router = require("express-promise-router");

const db = require("../db");

const router = new Router();

module.exports = router;

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    const count = await db.query({
        text: "SELECT COUNT(id) FROM reviews WHERE product_id = $1",
        values: [id]
    });
    const reviews = await db.query({
        text: "SELECT * FROM reviews WHERE product_id = $1",
        values: [id]
    });
    const reviewSummaryData = await db.query({
        text: "SELECT * FROM review_summary_view WHERE product_id = $1",
        values: [id]
    })

    const reviewData = {count: count.rows[0].count, reviews: reviews.rows, reviewSummaryData: reviewSummaryData.rows[0]}
    res.send(reviewData);
});