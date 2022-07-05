
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE characters (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "name" VARCHAR,
    "level" INT,
    "race" VARCHAR,
    "class" VARCHAR,
    "class_lvl" INT,
    "hp" INT,
    "ac" INT,
    "speed" INT,
    "strength" INT,
    "dexterity" INT,
    "constitution" INT,
    "intelligence" INT,
    "wisdom" INT,
    "charisma" INT,
    "copper_pieces" INT,
    "silver_pieces" INT,
    "electrum_pieces" INT,
    "platinum_pieces" INT
);

CREATE TABLE characters_items (
    "id" SERIAL PRIMARY KEY,
    "character_id" INT REFERENCES characters,
    "api_id" VARCHAR
);

CREATE TABLE characters_spells (
    "id" SERIAL PRIMARY KEY,
    "character_id" INT REFERENCES characters,
    "api_id" VARCHAR,
    "prepared" BOOLEAN DEFAULT false
);

CREATE TABLE characters_conditions (
    "id" SERIAL PRIMARY KEY,
    "Character_id" INT REFERENCES characters,
    "api_id" VARCHAR
);