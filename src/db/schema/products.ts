import {
	boolean,
	numeric,
	pgTable,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";
import { businesses } from "./businesses";
import { categories } from "./categories";

export const products = pgTable.withRLS("products", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	category_id: uuid().references(() => categories.id),
	sku: text(),
	name: text(),
	description: text(),
	unit: text(),
	selling_price: numeric(),
	cost_price: numeric(),
	low_stock_threshold: numeric(),
	is_active: boolean().default(true),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
	updated_at: timestamp({ withTimezone: true }).defaultNow(),
});
