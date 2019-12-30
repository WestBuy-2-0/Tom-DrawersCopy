CREATE TABLE overviews (
  product_id INT PRIMARY KEY,
  description TEXT,
  features TEXT,
  whats_included TEXT
);

CREATE TABLE specs (
  product_id INT PRIMARY KEY,
  key_specs TEXT,
  general TEXT,
  warranty TEXT,
  other TEXT
);

CREATE TABLE reviewMetrics (
  product_id INT PRIMARY KEY,
  review_count INT,
  average_rating INT,
  five_star INT,
  four_star INT,
  three_star INT,
  two_star INT, 
  one_star INT,
  would_recommend_pct INT
);

CREATE TABLE reviews (
  product_id INT PRIMARY KEY,
  submitter TEXT,
  submission_date TEXT,
  rating INT,
  title TEXT,
  text TEXT,
  verified_purchase BOOLEAN,
  would_recommend BOOLEAN, 
  helpful_count INT,
  unhelpful_count INT,
  rated_features BOOLEAN,
  quality_rating INT,
  value_rating INT, 
  ease_of_use_rating INT
);
