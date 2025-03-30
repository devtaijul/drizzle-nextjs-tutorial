import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").notNull().primaryKey(),
  fullName: varchar("fullName", {
    length: 255,
  }).notNull(),
  age: integer("age").notNull(),
});
