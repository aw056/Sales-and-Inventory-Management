import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";
import { customers } from "./customers";

export const sales = pgTable.withRLS("sales", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	customer_id: uuid().references(() => customers.id),
	sale_number: text(),
	status: text(),
	subtotal: numeric(),
	discount_total: numeric(),
	tax_total: numeric(),
	grand_total: numeric(),
	created_by: uuid(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});
