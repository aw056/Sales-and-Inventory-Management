import { jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { businesses } from "./businesses";

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
