import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";

export const businessMembers = pgTable.withRLS("business_members", {
	id: uuid().primaryKey().defaultRandom(),
	business_id: uuid().references(() => businesses.id),
	user_id: uuid(),
	role: text(),
	created_at: timestamp({ withTimezone: true }).defaultNow(),
});
