
CREATE TABLE IF NOT EXISTS quotes (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(1024),
  content VARCHAR(1024),
  author VARCHAR(255),
);
