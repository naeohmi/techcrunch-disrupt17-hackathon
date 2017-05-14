\connect helperbee_development



CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(255),
  author VARCHAR(255),
);
