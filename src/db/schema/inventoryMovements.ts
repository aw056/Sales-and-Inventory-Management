import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";
import { products } from "./products";

export const inventoryMovements = pgTable.withRLS("inventory_movements", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	product_id: uuid().references(() => products.id),
	movement_type: text(),
	quantity: numeric(),
	reference_type: text(),
	reference_id: uuid(),
	reason: text(),
	created_by: uuid(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});
