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

export const businessesTable = pgTable.withRLS("businesses", {
	id: uuid().primaryKey().defaultRandom(),
	name: text(),
	short_name: text(),
	email: text(),
	phone_number: integer(),
	address: text(),
	logo: text(),
});

export const authUsersTable = pgTable.withRLS("auth_users", {
	id: uuid().primaryKey().defaultRandom(),
	email: text(),
});

export const businessMembersTable = pgTable.withRLS("business_members", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	user_id: uuid(),
	role: text(),
	created_at: timestamp().defaultNow(),
});

export const categoriesTabel = pgTable.withRLS("categories", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	name: text(),
	created_at: timestamp().defaultNow(),
});

export const productsTable = pgTable.withRLS("products", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	category_id: uuid(),
	sku: text(),
	name: text(),
	description: text(),
	unit: text(),
	selling_price: numeric(),
	cost_price: numeric(),
	low_stock_threshold: numeric(),
	is_active: boolean().default(true),
	created_at: timestamp().defaultNow(),
	updated_at: timestamp().defaultNow(),
});

export const inventoryBalancesTable = pgTable.withRLS("inventory_balances", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	product_id: uuid(),
	quantity: numeric(),
	updated_at: timestamp().defaultNow(),
});

export const inventoryMovementsTable = pgTable.withRLS("inventory_movements", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	product_id: uuid(),
	movement_type: text(),
	quantity: numeric(),
	reference_type: text(),
	reference_id: uuid(),
	reason: text(),
	created_by: uuid(),
	created_at: timestamp().defaultNow(),
});

export const customersTable = pgTable.withRLS("customers", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	name: text(),
	phone: text(),
	email: text(),
	notes: text(),
	created_at: timestamp().defaultNow(),
});

export const suppliersTable = pgTable.withRLS("suppliers", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	name: text(),
	phone: text(),
	email: text(),
	notes: text(),
	created_at: timestamp().defaultNow(),
});

export const stockReceiptsTable = pgTable.withRLS("stock_receipts", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	supplier_id: uuid(),
	receipt_number: text(),
	status: text(),
	notes: text(),
	created_by: uuid(),
	created_at: timestamp().defaultNow(),
});

export const stockReceiptItemsTable = pgTable.withRLS("stock_receipt_items", {
	id: uuid().primaryKey().defaultRandom(),
	stock_receipt_id: uuid(),
	product_id: uuid(),
	quantity: numeric(),
	unit_cost: numeric(),
});

export const salesTable = pgTable.withRLS("sales", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	customer_id: uuid(),
	sale_number: text(),
	status: text(),
	subtotal: numeric(),
	discount_total: numeric(),
	tax_total: numeric(),
	grand_total: numeric(),
	created_by: uuid(),
	created_at: timestamp().defaultNow(),
});

export const saleItemsTable = pgTable.withRLS("sale_items", {
	id: uuid().primaryKey().defaultRandom(),
	sale_id: uuid(),
	product_id: uuid(),
	product_name_snapshot: text(),
	sku_snapshot: text(),
	quantity: numeric(),
	unit_price: numeric(),
	line_total: numeric(),
});

export const paymentsTable = pgTable.withRLS("payments", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	sale_id: uuid(),
	method: text(),
	amount: numeric(),
	status: text(),
	paid_at: timestamp().defaultNow(),
	created_at: timestamp().defaultNow(),
});

export const auditLogsTable = pgTable.withRLS("audit_logs", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid(),
	user_id: uuid(),
	action: text(),
	entity_id: uuid(),
	entity_type: text(),
	metadata: jsonb(),
	created_at: timestamp().defaultNow(),
});
