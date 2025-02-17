import { boolean, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { DocTable } from "./doctor";

export const patientTable = pgTable("patient", {
      id: integer().primaryKey().generatedAlwaysAsIdentity(),
      name: text("pat_name").notNull(),
      email: text("pat_email").notNull().unique(),
      password: text("pat_password").notNull(),
      verified: boolean("verification_status").notNull().default(false),
      docAssigned: integer("doc_id").references(() => DocTable.id)
});
