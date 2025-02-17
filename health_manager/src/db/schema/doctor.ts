import { boolean, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { patientTable } from "./patient";

export const DocTable = pgTable("doctor", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("doc_name").notNull(),
  email: text("doc_email").notNull().unique(),
  phone: text("doc_phone").notNull().unique(),
  password: text("doc_password").notNull(),
  verified: boolean("verification_status").notNull().default(false),
  address: text("clinic_address").notNull(),
  
});
