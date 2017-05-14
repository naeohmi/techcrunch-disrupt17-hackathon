DROP DATABASE IF EXISTS beedatabase;
CREATE DATABASE beedatabase;

\c beedatabase;
-- select FIRSTNAME, LASTNAME, USERNAME, LANGUAGE from profile inner join languagelist on (profile.language_id = languagelist.id);

CREATE TABLE languagelist (
    ID SERIAL PRIMARY KEY,
    LANGUAGE VARCHAR(255)
);

CREATE TABLE profile (
    ID SERIAL PRIMARY KEY,
    FIRSTNAME VARCHAR(255) NOT NULL,
    LASTNAME VARCHAR(255) NOT NULL,
    USERNAME VARCHAR(255),
    LANGUAGE_ID INTEGER REFERENCES languagelist(ID),
    PASSWORD INTEGER
);

CREATE TABLE messages (
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR(255) NOT NULL,
    CONTENT VARCHAR(255) NOT NULL
);

INSERT INTO languagelist (ID, LANGUAGE)
    VALUES
        (1, 'English'),
        (2, 'Spanish'),
        (3, 'Chinese'),
        (4, 'French'),
        (5, 'Tagalog'),
        (6, 'Vietnamese'),
        (7, 'Korean'),
        (8, 'German'),
        (9, 'Arabic'),
        (10, 'Russian'),
        (11, 'Other');

INSERT INTO profile (ID, FIRSTNAME, LASTNAME, USERNAME, LANGUAGE_ID, PASSWORD)
    VALUES
        (1, 'John', 'Bayer', 'Batman', 1, 123456789);

INSERT INTO messages (ID, NAME, CONTENT)
    VALUES
        (1, 'John', 'I am the dark knight!');