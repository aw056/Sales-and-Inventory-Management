import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error("DATABASE_URL tidak ditemukan");
}

export const client = postgres(connectionString, {
	max: 1,
	connect_timeout: 30,
});

export const db = drizzle({ client });
