import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";

export const categories = pgTable.withRLS("categories", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	name: text(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});
