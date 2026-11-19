import { numeric, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { products } from "./products";
import { sales } from "./sales";

export const saleItems = pgTable.withRLS("sale_items", {
	id: uuid().primaryKey().defaultRandom(),
	sale_id: uuid().references(() => sales.id),
	product_id: uuid().references(() => products.id),
	product_name_snapshot: text(),
	sku_snapshot: text(),
	quantity: numeric(),
	unit_price: numeric(),
	line_total: numeric(),
});
