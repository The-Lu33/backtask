CREATE TABLE "users" (
  "id" INT PRIMARY KEY NOT NULL,
  "username" varchar,
  "password" varchar
);

CREATE TABLE "tasks" (
  "id" INT  PRIMARY KEY NOT NULL,
  "title" varchar,
  "description" varchar,
  "user_id" int
);

ALTER TABLE "tasks" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
