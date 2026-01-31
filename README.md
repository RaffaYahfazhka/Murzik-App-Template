# Murzik App Template

Murzik adalah aplikasi template **Website Landing Page dan Admin** berbasis **Next.js (App Router)** yang menggunakan **Supabase (PostgreSQL)** sebagai database dan **Prisma** sebagai ORM.

Project ini menggunakan **Yarn** sebagai package manager.

---

## 🚀 Tech Stack

* **Next.js** (App Router)
* **React**
* **TypeScript**
* **Prisma ORM**
* **Supabase (PostgreSQL)**
* **Tailwind CSS**
* **shadcn/ui**

---

## 📦 Prerequisites

Pastikan sudah ter-install:

* **Node.js** ≥ 18
* **Yarn**
* **PostgreSQL (via Supabase)**

---

## ⚙️ Environment Variables

Buat file **`.env`** di root project, lalu isi dengan konfigurasi Supabase berikut:

```env
# Prisma database configuration
DATABASE_URL="postgresql://postgres.ahqzanlnbdbadbsrtsmh:YdmiHML2g0dZKcl0@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true&preparedStatements=false"

DIRECT_URL="postgresql://postgres.ahqzanlnbdbadbsrtsmh:YdmiHML2g0dZKcl0@aws-1-ap-northeast-1.pooler.supabase.com:5432/postgres?pgbouncer=true&preparedStatements=false"
```

> ⚠️ **Catatan Penting**
>
> * `DATABASE_URL` digunakan untuk koneksi pooling (PgBouncer)
> * `DIRECT_URL` digunakan untuk Prisma migration
> * Jangan pernah commit file `.env` ke repository public

---

## 🧱 Prisma Setup

Generate Prisma Client:

```bash
yarn prisma generate
```

Jalankan migration:

```bash
yarn prisma migrate dev
```

(Optional) Buka Prisma Studio:

```bash
yarn prisma studio
```

---

## ▶️ Running Development Server

Jalankan server development:

```bash
yarn dev
```

Buka browser di:

```
http://localhost:3000
```

---

## 📁 Project Structure (Ringkas)

```
src/
├─ app/            # App Router (pages, layout, api)
├─ components/     # Reusable UI components
├─ containers/     # Navbar, Sidebar, dll
├─ lib/            # Auth, Prisma, utils
├─ hooks/          # Custom hooks
prisma/
├─ schema.prisma
```

---

## 🔐 Authentication

* Login menggunakan API route (`/api/login`)
* Session berbasis **cookie**
* Logout akan menghapus cookie & refresh server state
* Proteksi route dapat ditangani via `middleware.ts`

---

## 🚢 Deployment

Disarankan deploy menggunakan **Vercel**:

1. Push repository ke GitHub
2. Import project ke Vercel
3. Set environment variables (`DATABASE_URL`, `DIRECT_URL`)
4. Deploy 🚀

Dokumentasi lengkap:

* [https://nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 📚 References

* Next.js Docs → [https://nextjs.org/docs](https://nextjs.org/docs)
* Prisma Docs → [https://www.prisma.io/docs](https://www.prisma.io/docs)
* Supabase Docs → [https://supabase.com/docs](https://supabase.com/docs)

---

## 📝 Notes

Project ini menggunakan **Next.js App Router**, sehingga:

* Perubahan auth (login/logout) perlu `router.refresh()`
* Server & Client Component dipisah

---

Happy coding ✨
