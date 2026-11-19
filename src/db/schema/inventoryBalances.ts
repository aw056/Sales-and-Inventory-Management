import { numeric, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";
import { products } from "./products";

export const inventoryBalances = pgTable.withRLS("inventory_balances", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	product_id: uuid().references(() => products.id),
	quantity: numeric(),
	updated_at: timestamp({ withTimezone: true }).defaultNow(),
});
