DROP DATABASE IF EXISTS beedatabase;
CREATE DATABASE beedatabase;

\c beedatabase;

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