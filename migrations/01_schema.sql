DROP TABLE IF EXISTS clients CASCADE;

CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  address VARCHAR(255), 
  provider VARCHAR(255),
  start_date VARCHAR(255),
  end_date VARCHAR(255)
);

