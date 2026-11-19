import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";

export const customers = pgTable.withRLS("customers", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	name: text(),
	phone: text(),
	email: text(),
	notes: text(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});
