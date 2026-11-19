import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const businesses = pgTable.withRLS("businesses", {
	id: uuid().primaryKey().defaultRandom(),
	name: text(),
	short_name: text(),
	email: text(),
	phone_number: text(),
	address: text(),
	logo: text(),
});
