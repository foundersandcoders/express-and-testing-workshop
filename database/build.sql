
BEGIN;

DROP TABLE IF EXISTS facsters CASCADE;

CREATE TABLE facsters(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(1000) NOT NULL,
  surname VARCHAR(1000) NOT NULL,
  cohort INT NOT NULL
);

CREATE TABLE hobbies(
  facster_id INTEGER REFERENCES facsters(id),
  hobby VARCHAR(1000) NOT NULL,
  superpower VARCHAR(500) NOT NULL
);


INSERT INTO facsters (firstname, surname, cohort) VALUES
('Abdullah', 'Chaudry', 11),
('Amelie', 'Mystery', 11),
('Aseel', 'Mustafa', 11),
('Alina', 'Solinas', 11),
('Bart', 'Bucknill', 11),
('Yahia', 'Mystery', 11);

INSERT INTO hobbies(facster_id, hobby, superpower) VALUES
('1', 'late night sql', 'linting wizard'),
('2', 'baking french breads', 'this variable afficionado'),
('3', 'Pro Athlete', 'Burning down cocoa fields'),
('4', 'tiramisuing', 'Waterfalls in parallel'),
('5', 'Ninja training', 'NodeBot!!');

COMMIT;
