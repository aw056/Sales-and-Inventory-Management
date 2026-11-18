# ERD — Inventory & Sales Management

- **Versi:** 1.0
- **Status:** Draft untuk MVP
- **Tech stack:** TanStack Start, Drizzle ORM, Supabase PostgreSQL + Auth
- **Tanggal:** 2 November 2026

## 1. Entity Relationship Diagram

Diagram ini menggunakan Mermaid ERD. Diagram dapat dirender di GitHub, GitLab, VS Code dengan ekstensi Mermaid, atau Mermaid Live Editor.

```mermaid
erDiagram
    BUSINESSES ||--o{ BUSINESS_MEMBERS : has
    BUSINESSES ||--o{ CATEGORIES : has
    BUSINESSES ||--o{ PRODUCTS : owns
    BUSINESSES ||--o{ INVENTORY_BALANCES : tracks
    BUSINESSES ||--o{ INVENTORY_MOVEMENTS : records
    BUSINESSES ||--o{ CUSTOMERS : has
    BUSINESSES ||--o{ SUPPLIERS : has
    BUSINESSES ||--o{ STOCK_RECEIPTS : records
    BUSINESSES ||--o{ SALES : records
    BUSINESSES ||--o{ PAYMENTS : records
    BUSINESSES ||--o{ AUDIT_LOGS : records

    CATEGORIES o|--o{ PRODUCTS : categorizes
    PRODUCTS ||--o| INVENTORY_BALANCES : has_balance
    PRODUCTS ||--o{ INVENTORY_MOVEMENTS : has_movements

    SUPPLIERS o|--o{ STOCK_RECEIPTS : supplies
    STOCK_RECEIPTS ||--|{ STOCK_RECEIPT_ITEMS : contains
    PRODUCTS ||--o{ STOCK_RECEIPT_ITEMS : received_product

    CUSTOMERS o|--o{ SALES : places
    SALES ||--|{ SALE_ITEMS : contains
    PRODUCTS ||--o{ SALE_ITEMS : sold_product
    SALES ||--o{ PAYMENTS : paid_by

    BUSINESS_MEMBERS }o--|| AUTH_USERS : references
    SALES }o--|| AUTH_USERS : created_by
    STOCK_RECEIPTS }o--|| AUTH_USERS : created_by
    INVENTORY_MOVEMENTS }o--|| AUTH_USERS : created_by
    AUDIT_LOGS }o--o| AUTH_USERS : actor

    BUSINESSES {
        uuid id PK
        text name
        text timezone
        char currency
        timestamptz created_at
    }

    AUTH_USERS {
        uuid id PK
        text email "Managed by Supabase Auth, not an application-owned table"
    }

    BUSINESS_MEMBERS {
        uuid id PK
        uuid business_id FK
        uuid user_id FK
        text role
        timestamptz created_at
    }

    CATEGORIES {
        uuid id PK
        uuid business_id FK
        text name
        timestamptz created_at
    }

    PRODUCTS {
        uuid id PK
        uuid business_id FK
        uuid category_id FK
        text sku
        text name
        text description
        text unit
        numeric selling_price
        numeric cost_price
        numeric low_stock_threshold
        boolean is_active
        timestamptz created_at
        timestamptz updated_at
    }

    INVENTORY_BALANCES {
        uuid id PK
        uuid business_id FK
        uuid product_id FK
        numeric quantity
        timestamptz updated_at
    }

    INVENTORY_MOVEMENTS {
        uuid id PK
        uuid business_id FK
        uuid product_id FK
        text movement_type
        numeric quantity
        text reference_type
        uuid reference_id
        text reason
        uuid created_by FK
        timestamptz created_at
    }

    CUSTOMERS {
        uuid id PK
        uuid business_id FK
        text name
        text phone
        text email
        text notes
        timestamptz created_at
    }

    SUPPLIERS {
        uuid id PK
        uuid business_id FK
        text name
        text phone
        text email
        text notes
        timestamptz created_at
    }

    STOCK_RECEIPTS {
        uuid id PK
        uuid business_id FK
        uuid supplier_id FK
        text receipt_number
        text status
        text notes
        uuid created_by FK
        timestamptz created_at
    }

    STOCK_RECEIPT_ITEMS {
        uuid id PK
        uuid stock_receipt_id FK
        uuid product_id FK
        numeric quantity
        numeric unit_cost
    }

    SALES {
        uuid id PK
        uuid business_id FK
        uuid customer_id FK
        text sale_number
        text status
        numeric subtotal
        numeric discount_total
        numeric tax_total
        numeric grand_total
        uuid created_by FK
        timestamptz created_at
    }

    SALE_ITEMS {
        uuid id PK
        uuid sale_id FK
        uuid product_id FK
        text product_name_snapshot
        text sku_snapshot
        numeric quantity
        numeric unit_price
        numeric line_total
    }

    PAYMENTS {
        uuid id PK
        uuid business_id FK
        uuid sale_id FK
        text method
        numeric amount
        text status
        timestamptz paid_at
        timestamptz created_at
    }

    AUDIT_LOGS {
        uuid id PK
        uuid business_id FK
        uuid actor_user_id FK
        text action
        text entity_type
        uuid entity_id
        jsonb metadata
        timestamptz created_at
    }
```

## 2. Ringkasan Relasi

| Relasi                                   | Kardinalitas | Penjelasan                                                                            |
| ---------------------------------------- | ------------ | ------------------------------------------------------------------------------------- |
| `businesses` → `business_members`        | 1:N          | Satu bisnis memiliki banyak anggota                                                   |
| `businesses` → `products`                | 1:N          | Produk dimiliki oleh satu bisnis                                                      |
| `categories` → `products`                | 1:N          | Kategori dapat memiliki banyak produk; kategori produk boleh kosong                   |
| `products` → `inventory_balances`        | 1:0..1       | Setiap produk memiliki maksimal satu saldo stok                                       |
| `products` → `inventory_movements`       | 1:N          | Setiap produk memiliki riwayat perubahan stok                                         |
| `suppliers` → `stock_receipts`           | 1:N          | Pemasok dapat terkait dengan banyak penerimaan barang                                 |
| `stock_receipts` → `stock_receipt_items` | 1:N          | Satu penerimaan berisi satu atau lebih item                                           |
| `customers` → `sales`                    | 1:N          | Pelanggan dapat memiliki banyak transaksi; pelanggan pada transaksi bersifat opsional |
| `sales` → `sale_items`                   | 1:N          | Satu transaksi berisi satu atau lebih item                                            |
| `sales` → `payments`                     | 1:N          | Mendukung satu atau beberapa catatan pembayaran                                       |
| `auth.users` → `business_members`        | 1:N          | Pengguna Supabase dapat menjadi anggota beberapa bisnis                               |
| `auth.users` → catatan operasional       | 1:N          | Menyimpan siapa yang membuat pergerakan stok, penerimaan, penjualan, atau audit       |

## 3. Aturan Integritas yang Wajib

### 3.1 Constraint dan indeks

Implementasikan constraint berikut melalui Drizzle schema dan/atau migration SQL:

- Primary key UUID untuk setiap entitas.
- Foreign key untuk seluruh relasi yang didefinisikan.
- `UNIQUE (business_id, user_id)` pada `business_members`.
- `UNIQUE (business_id, sku)` pada `products`.
- `UNIQUE (business_id, sale_number)` pada `sales`.
- `UNIQUE (business_id, receipt_number)` pada `stock_receipts`.
- `UNIQUE (business_id, product_id)` pada `inventory_balances`.
- `CHECK (selling_price >= 0)` pada `products`.
- `CHECK (quantity > 0)` untuk item penjualan, item penerimaan, dan kuantitas pergerakan.
- `CHECK (amount >= 0)` untuk pembayaran.
- Indeks pada `business_id`, foreign key, `created_at`, status transaksi, serta kolom yang sering digunakan untuk pencarian dan filter.

Validasi lintas tabel—misalnya memastikan `product_id` dan `business_id` berasal dari bisnis yang sama—perlu ditegakkan dengan desain foreign key yang sesuai, constraint tambahan, atau fungsi database tepercaya. Jangan mengandalkan validasi UI saja.

### 3.2 Isolasi multi-tenant

- Tabel data bisnis harus menyimpan `business_id`.
- Terapkan RLS pada seluruh tabel yang dapat diakses melalui Supabase API.
- Kebijakan RLS harus memverifikasi keanggotaan pengguna pada bisnis terkait.
- Operasi server menggunakan Drizzle tetap harus memeriksa otorisasi.
- Jika koneksi Drizzle menggunakan kredensial berhak istimewa yang melewati RLS, jangan menganggap RLS otomatis melindungi operasi tersebut. Validasi keanggotaan di server atau gunakan koneksi/strategi yang mempertahankan konteks pengguna.
- Jangan mengekspos `service_role` key atau kredensial database ke browser.

### 3.3 Konsistensi inventaris

`inventory_balances.quantity` adalah saldo terkini untuk pembacaan cepat, sedangkan `inventory_movements` adalah jejak perubahan stok.

Semua operasi yang mengubah stok harus:

1. Memvalidasi pengguna, peran, bisnis, produk, dan kuantitas.
2. Mengunci atau memperbarui saldo secara atomik.
3. Memastikan stok mencukupi jika stok negatif tidak diperbolehkan.
4. Memperbarui saldo dan membuat movement dalam satu transaksi database.
5. Membatalkan seluruh transaksi jika salah satu langkah gagal.

Jangan izinkan aplikasi mengubah `inventory_balances.quantity` secara langsung tanpa movement yang sesuai. Untuk audit yang lebih kuat, saldo dapat direkonsiliasi secara berkala dengan menjumlahkan seluruh pergerakan.

### 3.4 Konsistensi penjualan

Operasi `completeSale` harus menyimpan header penjualan, item, pembayaran, dan inventory movements dalam satu transaksi database. Harga dan total dihitung ulang di server. Simpan snapshot nama produk, SKU, dan harga agar riwayat transaksi tidak berubah saat data produk diperbarui.

Gunakan idempotency key atau mekanisme deduplikasi agar retry request tidak menghasilkan transaksi ganda.

## 4. Catatan Implementasi Drizzle ORM

Struktur folder yang disarankan:

```text
src/
  db/
    index.ts
    schema/
      businesses.ts
      members.ts
      products.ts
      inventory.ts
      customers.ts
      suppliers.ts
      sales.ts
      payments.ts
      audit-logs.ts
    queries/
      products.ts
      inventory.ts
      sales.ts
drizzle/
  0000_initial_schema.sql
drizzle.config.ts
```

Rekomendasi implementasi:

- Definisikan tabel, tipe kolom, indeks, dan constraint menggunakan Drizzle ORM.
- Gunakan Drizzle Kit untuk menghasilkan dan menjalankan migration sesuai workflow tim.
- Simpan file migration di version control dan tinjau SQL sebelum diterapkan.
- Tabel `auth.users` dikelola oleh Supabase Auth; jangan membuat ulang tabel tersebut sebagai tabel aplikasi.
- Pastikan foreign key ke `auth.users(id)` menggunakan referensi skema `auth` yang benar di migration SQL.
- Gunakan transaksi Drizzle untuk operasi multi-tabel, dengan mekanisme database yang tepat untuk menangani konkurensi stok.
- Jika fitur bergantung pada RLS, uji operasi melalui jalur koneksi dan konteks autentikasi yang benar.

## 5. Keputusan yang Belum Termasuk ERD MVP

Perlu ditambahkan sebagai entitas terpisah bila fiturnya disetujui:

- **Multi-cabang:** `locations` dan penambahan `location_id` pada saldo serta pergerakan stok.
- **Retur penjualan:** `sale_returns` dan `sale_return_items`, termasuk movement pengembalian.
- **Pembayaran parsial/utang:** aturan saldo terutang dan status pembayaran yang eksplisit.
- **Diskon kompleks:** entitas promo atau diskon bila perlu histori dan aturan khusus.
- **Audit perubahan harga:** tabel histori harga jika diperlukan.
- **Purchase order:** `purchase_orders` dan `purchase_order_items` jika proses pembelian formal dibutuhkan.

## 6. Asumsi MVP

- Satu bisnis memiliki satu lokasi stok.
- Produk memiliki satu satuan dasar.
- Stok negatif tidak diperbolehkan.
- Pelanggan dan pemasok bersifat opsional.
- Pembayaran dicatat manual.
- Transaksi yang telah selesai tidak dihapus permanen; koreksi dilakukan melalui void atau transaksi koreksi yang diaudit.
- Semua tabel operasional dipisahkan berdasarkan `business_id`.
