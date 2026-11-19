import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";
import { sales } from "./sales";

export const payments = pgTable.withRLS("payments", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	sale_id: uuid().references(() => sales.id),
	method: text(),
	amount: numeric(),
	status: text(),
	paid_at: timestamp({ withTimezone: true }).defaultNow(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});
