import { numeric, pgTable, uuid } from "drizzle-orm/pg-core";
import { products } from "./products";
import { stockReceipts } from "./stockReceipts";

export const stockReceiptItems = pgTable.withRLS("stock_receipt_items", {
	id: uuid().primaryKey().defaultRandom(),
	stock_receipt_id: uuid().references(() => stockReceipts.id),
	product_id: uuid().references(() => products.id),
	quantity: numeric(),
	unit_cost: numeric(),
});
