import {
	boolean,
	integer,
	jsonb,
	numeric,
	pgTable,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";

export const businesses = pgTable.withRLS("businesses", {
	id: uuid().primaryKey().defaultRandom(),
	name: text(),
	short_name: text(),
	email: text(),
	phone_number: text(),
	address: text(),
	logo: text(),
});

export const businessMembers = pgTable.withRLS("business_members", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	user_id: uuid(),
	role: text(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});

export const categories = pgTable.withRLS("categories", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	name: text(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});

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

export const inventoryBalances = pgTable.withRLS("inventory_balances", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	product_id: uuid().references(() => products.id),
	quantity: numeric(),
	updated_at: timestamp({ withTimezone: true }).defaultNow(),
});

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

export const customers = pgTable.withRLS("customers", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	name: text(),
	phone: text(),
	email: text(),
	notes: text(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});

export const suppliers = pgTable.withRLS("suppliers", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	name: text(),
	phone: text(),
	email: text(),
	notes: text(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});

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

export const stockReceiptItems = pgTable.withRLS("stock_receipt_items", {
	id: uuid().primaryKey().defaultRandom(),
	stock_receipt_id: uuid().references(() => stockReceipts.id),
	product_id: uuid().references(() => products.id),
	quantity: numeric(),
	unit_cost: numeric(),
});

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

export const auditLogs = pgTable.withRLS("audit_logs", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	user_id: uuid(),
	action: text(),
	entity_id: uuid(),
	entity_type: text(),
	metadata: jsonb(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});
