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

export const businessesTable = pgTable("businesses", {
	id: uuid().primaryKey(),
	name: text(),
	short_name: text(),
	email: text(),
	phone_number: integer(),
	address: text(),
	logo: text(),
});

export const authUsersTable = pgTable("auth_users", {
	id: uuid().primaryKey(),
	email: text(),
});

export const businessMembersTable = pgTable("business_members", {
	id: uuid().primaryKey(),
	business_id: uuid(),
	user_id: uuid(),
	role: text(),
	created_at: timestamp().defaultNow(),
});

export const categoriesTabel = pgTable("categories", {
	id: uuid().primaryKey(),
	business_id: uuid(),
	name: text(),
	created_at: timestamp().defaultNow(),
});

export const productsTable = pgTable("products", {
	id: uuid().primaryKey(),
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

export const inventoryBalancesTable = pgTable("inventory_balances", {
	id: uuid().primaryKey(),
	business_id: uuid(),
	product_id: uuid(),
	quantity: numeric(),
	updated_at: timestamp().defaultNow(),
});

export const inventoryMovementsTable = pgTable("inventory_movements", {
	id: uuid().primaryKey(),
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

export const customersTable = pgTable("customers", {
	id: uuid().primaryKey(),
	business_id: uuid(),
	name: text(),
	phone: text(),
	email: text(),
	notes: text(),
	created_at: timestamp().defaultNow(),
});

export const suppliersTable = pgTable("suppliers", {
	id: uuid().primaryKey(),
	business_id: uuid(),
	name: text(),
	phone: text(),
	email: text(),
	notes: text(),
	created_at: timestamp().defaultNow(),
});

export const stockReceiptsTable = pgTable("stock_receipts", {
	id: uuid().primaryKey(),
	business_id: uuid(),
	supplier_id: uuid(),
	receipt_number: text(),
	status: text(),
	notes: text(),
	created_by: uuid(),
	created_at: timestamp().defaultNow(),
});

export const stockReceiptItemsTable = pgTable("stock_receipt_items", {
	id: uuid().primaryKey(),
	stock_receipt_id: uuid(),
	product_id: uuid(),
	quantity: numeric(),
	unit_cost: numeric(),
});

export const salesTable = pgTable("sales", {
	id: uuid().primaryKey(),
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

export const saleItemsTable = pgTable("sale_items", {
	id: uuid().primaryKey(),
	sale_id: uuid(),
	product_id: uuid(),
	product_name_snapshot: text(),
	sku_snapshot: text(),
	quantity: numeric(),
	unit_price: numeric(),
	line_total: numeric(),
});

export const paymentsTable = pgTable("payments", {
	id: uuid().primaryKey(),
	business_id: uuid(),
	sale_id: uuid(),
	method: text(),
	amount: numeric(),
	status: text(),
	paid_at: timestamp().defaultNow(),
	created_at: timestamp().defaultNow(),
});

export const auditLogsTable = pgTable("audit_logs", {
	id: uuid().primaryKey(),
	business_id: uuid(),
	user_id: uuid(),
	action: text(),
	entity_id: uuid(),
	entity_type: text(),
	metadata: jsonb(),
	created_at: timestamp().defaultNow(),
});
