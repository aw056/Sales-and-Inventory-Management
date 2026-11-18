import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "./index";
import {
	auditLogs,
	businesses,
	businessMembers,
	categories,
	customers,
	inventoryBalances,
	inventoryMovements,
	payments,
	products,
	saleItems,
	sales,
	stockReceiptItems,
	stockReceipts,
	suppliers,
} from "./schema";

const DAY = 24 * 60 * 60 * 1000;

const START_DATE = new Date("2025-11-18T00:00:00+07:00");
const END_DATE = new Date("2026-11-18T23:59:59+07:00");

const id = () => randomUUID();

const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const pick = <T>(items: T[]): T => items[random(0, items.length - 1)];

const randomDate = (start: Date, end: Date) =>
	new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const money = (value: number) => value.toFixed(2);

const productsData = [
	["Laptop ASUS Vivobook", "Electronics", "PCS", 8500000, 7200000],
	["Laptop Lenovo IdeaPad", "Electronics", "PCS", 7800000, 6500000],
	["Mouse Logitech M170", "Accessories", "PCS", 150000, 95000],
	["Keyboard Logitech K120", "Accessories", "PCS", 180000, 110000],
	["Monitor LG 24 Inch", "Electronics", "PCS", 1850000, 1500000],
	["Flashdisk Sandisk 64GB", "Storage", "PCS", 95000, 65000],
	["SSD Kingston 480GB", "Storage", "PCS", 650000, 480000],
	["RAM Kingston 8GB", "Components", "PCS", 450000, 320000],
	["Printer Epson L3210", "Electronics", "PCS", 2450000, 2100000],
	["Headset JBL", "Accessories", "PCS", 350000, 240000],
	["Kabel HDMI 2M", "Accessories", "PCS", 75000, 40000],
	["Router TP-Link", "Networking", "PCS", 320000, 230000],
	["Webcam Logitech", "Accessories", "PCS", 550000, 390000],
	["Speaker Bluetooth", "Accessories", "PCS", 280000, 190000],
	["Power Bank 10000mAh", "Accessories", "PCS", 250000, 175000],
	["USB Hub 4 Port", "Accessories", "PCS", 120000, 75000],
	["SSD Samsung 1TB", "Storage", "PCS", 1450000, 1200000],
	["Harddisk External 1TB", "Storage", "PCS", 1100000, 900000],
	["RAM Kingston 16GB", "Components", "PCS", 850000, 680000],
	["Processor Intel i5", "Components", "PCS", 3200000, 2750000],
	["Motherboard ASUS", "Components", "PCS", 1850000, 1550000],
	["VGA NVIDIA GTX", "Components", "PCS", 4500000, 3900000],
	["Casing PC", "Components", "PCS", 650000, 480000],
	["Power Supply 550W", "Components", "PCS", 750000, 580000],
	["Cooling Fan", "Components", "PCS", 150000, 90000],
	["Kabel LAN 10M", "Networking", "PCS", 55000, 30000],
	["Switch 8 Port", "Networking", "PCS", 250000, 180000],
	["Access Point", "Networking", "PCS", 750000, 550000],
	["Printer Canon G2010", "Electronics", "PCS", 2150000, 1800000],
	["Tinta Printer Hitam", "Office Supplies", "PCS", 120000, 85000],
	["Tinta Printer Warna", "Office Supplies", "PCS", 135000, 95000],
	["Kertas A4 80gsm", "Office Supplies", "REAM", 55000, 42000],
	["Mousepad", "Accessories", "PCS", 35000, 18000],
	["Laptop Stand", "Accessories", "PCS", 175000, 110000],
	["Microphone USB", "Accessories", "PCS", 450000, 320000],
	["UPS 650VA", "Electronics", "PCS", 950000, 780000],
	["Smartphone Holder", "Accessories", "PCS", 65000, 35000],
	["Bluetooth Adapter", "Networking", "PCS", 85000, 50000],
	["Card Reader", "Storage", "PCS", 45000, 25000],
	["Thermal Paste", "Components", "PCS", 75000, 45000],
] as const;

const customerNames = [
	"Andi Saputra",
	"Budi Santoso",
	"Citra Lestari",
	"Dewi Anggraini",
	"Eko Pratama",
	"Fajar Ramadhan",
	"Gita Permata",
	"Hendra Wijaya",
	"Indah Sari",
	"Joko Susanto",
	"Kevin Alexander",
	"Lina Marlina",
	"Maya Putri",
	"Nanda Saputra",
	"Oscar Fernando",
	"Putri Amelia",
	"Rizky Firmansyah",
	"Siti Rahma",
	"Taufik Hidayat",
	"Vina Oktavia",
];

const supplierNames = [
	"PT Sumber Teknologi",
	"CV Digital Nusantara",
	"PT Indo Computer",
	"CV Mitra Elektronik",
	"PT Global Hardware",
	"CV Sinar Jaya",
	"PT Techno Supply",
	"CV Berkah Komputer",
	"PT Prima Digital",
	"CV Mandiri Teknologi",
];

async function seed() {
	console.log("Starting database seed...");

	await db.transaction(async (tx) => {
		// 1. BUSINESS
		const businessId = id();

		await tx.insert(businesses).values({
			id: businessId,
			name: "Saim Computer Store",
			short_name: "SAIM",
			email: "hello@saimcomputer.test",
			phone_number: 8123456789,
			address: "Padang, Sumatera Barat, Indonesia",
			logo: null,
		});

		// 2. BUSINESS MEMBERS
		const userIds = Array.from({ length: 5 }, () => id());

		await tx.insert(businessMembers).values(
			userIds.map((userId, index) => ({
				id: id(),
				business_id: businessId,
				user_id: userId,
				role: ["owner", "admin", "manager", "cashier", "staff"][index],
				created_at: START_DATE,
			})),
		);

		// 3. CATEGORIES
		const categoryNames = [
			"Electronics",
			"Accessories",
			"Storage",
			"Components",
			"Networking",
			"Office Supplies",
			"Furniture",
			"Other",
		];

		const categoryIds = new Map<string, string>();

		for (const name of categoryNames) {
			const categoryId = id();
			categoryIds.set(name, categoryId);

			await tx.insert(categories).values({
				id: categoryId,
				business_id: businessId,
				name,
				created_at: START_DATE,
			});
		}

		// 4. PRODUCTS
		const productRecords = productsData.map((item, index) => ({
			id: id(),
			business_id: businessId,
			category_id: categoryIds.get(item[1])!,
			sku: `SKU-${String(index + 1).padStart(4, "0")}`,
			name: item[0],
			description: `Product ${item[0]}`,
			unit: item[2],
			selling_price: money(item[3]),
			cost_price: money(item[4]),
			low_stock_threshold: "5",
			is_active: true,
			created_at: START_DATE,
			updated_at: END_DATE,
		}));

		await tx.insert(products).values(productRecords);

		const stock = new Map<string, number>();

		// 5. INITIAL INVENTORY
		const movements: (typeof inventoryMovements.$inferInsert)[] = [];

		for (const product of productRecords) {
			const quantity = random(15, 60);
			stock.set(product.id, quantity);

			movements.push({
				id: id(),
				business_id: businessId,
				product_id: product.id,
				movement_type: "in",
				quantity: String(quantity),
				reference_type: "initial_stock",
				reference_id: null,
				reason: "Initial inventory",
				created_by: userIds[0],
				created_at: START_DATE,
			});
		}

		// 6. INVENTORY BALANCES
		await tx.insert(inventoryBalances).values(
			productRecords.map((product) => ({
				id: id(),
				business_id: businessId,
				product_id: product.id,
				quantity: String(stock.get(product.id)),
				updated_at: END_DATE,
			})),
		);

		// 7. CUSTOMERS
		const customerRecords = Array.from({ length: 50 }, (_, index) => {
			const name = customerNames[index % customerNames.length];

			return {
				id: id(),
				business_id: businessId,
				name: index < 20 ? name : `${name} ${Math.floor(index / 20) + 1}`,
				phone: `08${String(1000000000 + index).slice(1)}`,
				email: `customer${index + 1}@example.test`,
				notes: null,
				created_at: randomDate(START_DATE, END_DATE),
			};
		});

		await tx.insert(customers).values(customerRecords);

		// 8. SUPPLIERS
		const supplierRecords = supplierNames.map((name, index) => ({
			id: id(),
			business_id: businessId,
			name,
			phone: `081234567${String(index).padStart(2, "0")}`,
			email: `supplier${index + 1}@example.test`,
			notes: null,
			created_at: START_DATE,
		}));

		await tx.insert(suppliers).values(supplierRecords);

		// 9. STOCK RECEIPTS
		const receiptRecords = [];
		const receiptItemRecords = [];

		for (let i = 0; i < 60; i++) {
			const receiptId = id();
			const date = randomDate(START_DATE, END_DATE);
			const supplier = pick(supplierRecords);

			receiptRecords.push({
				id: receiptId,
				business_id: businessId,
				supplier_id: supplier.id,
				receipt_number: `RCV-${String(i + 1).padStart(5, "0")}`,
				status: "received",
				notes: "Stock replenishment",
				created_by: pick(userIds),
				created_at: date,
			});

			for (let j = 0; j < 3; j++) {
				const product = pick(productRecords);
				const quantity = random(5, 30);
				const cost = Number(product.cost_price);

				receiptItemRecords.push({
					id: id(),
					stock_receipt_id: receiptId,
					product_id: product.id,
					quantity: String(quantity),
					unit_cost: money(cost),
				});

				stock.set(product.id, (stock.get(product.id) ?? 0) + quantity);

				movements.push({
					id: id(),
					business_id: businessId,
					product_id: product.id,
					movement_type: "in",
					quantity: String(quantity),
					reference_type: "stock_receipt",
					reference_id: receiptId,
					reason: "Supplier stock receipt",
					created_by: pick(userIds),
					created_at: date,
				});
			}
		}

		await tx.insert(stockReceipts).values(receiptRecords);
		await tx.insert(stockReceiptItems).values(receiptItemRecords);

		// 10. SALES
		const saleRecords = [];
		const saleItemRecords = [];
		const paymentRecords = [];

		for (let i = 0; i < 240; i++) {
			const saleId = id();
			const date = randomDate(START_DATE, END_DATE);
			const customer = pick(customerRecords);

			let subtotal = 0;
			const items = [];

			for (let j = 0; j < 3; j++) {
				const product = pick(productRecords);
				const available = stock.get(product.id) ?? 0;

				if (available <= 0) continue;

				const quantity = random(1, Math.min(3, available));
				const unitPrice = Number(product.selling_price);
				const lineTotal = quantity * unitPrice;

				subtotal += lineTotal;
				stock.set(product.id, available - quantity);

				items.push({
					id: id(),
					sale_id: saleId,
					product_id: product.id,
					product_name_snapshot: product.name,
					sku_snapshot: product.sku,
					quantity: String(quantity),
					unit_price: money(unitPrice),
					line_total: money(lineTotal),
				});

				movements.push({
					id: id(),
					business_id: businessId,
					product_id: product.id,
					movement_type: "out",
					quantity: String(quantity),
					reference_type: "sale",
					reference_id: saleId,
					reason: "Product sold",
					created_by: pick(userIds),
					created_at: date,
				});
			}

			if (items.length === 0) continue;

			const discount = Math.random() < 0.2 ? Math.round(subtotal * 0.05) : 0;

			const tax = 0;
			const grandTotal = subtotal - discount + tax;

			saleRecords.push({
				id: saleId,
				business_id: businessId,
				customer_id: customer.id,
				sale_number: `INV-${String(i + 1).padStart(5, "0")}`,
				status: "completed",
				subtotal: money(subtotal),
				discount_total: money(discount),
				tax_total: money(tax),
				grand_total: money(grandTotal),
				created_by: pick(userIds),
				created_at: date,
			});

			saleItemRecords.push(...items);

			paymentRecords.push({
				id: id(),
				business_id: businessId,
				sale_id: saleId,
				method: pick(["cash", "transfer", "card", "qris"]),
				amount: money(grandTotal),
				status: "paid",
				paid_at: date,
				created_at: date,
			});
		}

		await tx.insert(sales).values(saleRecords);
		await tx.insert(saleItems).values(saleItemRecords);
		await tx.insert(payments).values(paymentRecords);

		// 11. FINAL INVENTORY BALANCES
		for (const product of productRecords) {
			await tx
				.update(inventoryBalances)
				.set({
					quantity: String(stock.get(product.id) ?? 0),
					updated_at: END_DATE,
				})
				.where(
					// Replace this with your preferred product ID condition
					// See note below about importing eq from drizzle-orm.
					eq(inventoryBalances.product_id, product.id),
				);
		}

		// 12. INVENTORY MOVEMENTS
		await tx.insert(inventoryMovements).values(movements);

		// 13. AUDIT LOGS
		const auditRecords = Array.from({ length: 300 }, (_, index) => {
			const date = randomDate(START_DATE, END_DATE);

			return {
				id: id(),
				business_id: businessId,
				user_id: pick(userIds),
				action: pick([
					"create",
					"update",
					"delete",
					"sale_completed",
					"stock_received",
				]),
				entity_id: pick([
					...productRecords.map((p) => p.id),
					...saleRecords.map((s) => s.id),
				]),
				entity_type: pick(["product", "sale", "inventory", "customer"]),
				metadata: {
					source: "seed",
					sequence: index + 1,
				},
				created_at: date,
			};
		});

		await tx.insert(auditLogs).values(auditRecords);
	});

	console.log("Database seed completed!");
}

seed().catch((error) => {
	console.error("Seed failed:", error);
	process.exit(1);
});
