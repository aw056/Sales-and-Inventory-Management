import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";
import { suppliers } from "./suppliers";

export const stockReceipts = pgTable.withRLS("stock_receipts", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	supplier_id: uuid().references(() => suppliers.id),
	receipt_number: text(),
	status: text(),
	notes: text(),
	created_by: uuid(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});
