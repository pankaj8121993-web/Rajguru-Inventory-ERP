# Rajguru Foods Inventory ERP

Production-oriented Next.js + Supabase/PostgreSQL conversion of the approved Rajguru Foods inventory prototype.

## Architecture

- Next.js App Router + TypeScript
- Supabase Auth with cookie sessions
- Supabase PostgreSQL with RLS
- Append-only stock ledger
- Server-side maker-checker posting RPC
- FIFO cost layers and consumption
- Supabase Storage buckets for documents and imports
- Vercel deployment from GitHub
- Scheduled alert Edge Function

## Business rules included

- Three simple entry hubs: Inward, Outward and Internal Transfer
- Every physical movement creates a new lot
- Crop year, quality and source lineage
- Quality may be Pending/Unknown at inward
- Commodity-specific bag rules
  - Toor/Chana: loose inward; outward inclusive of bag; empty-bag tare excluded from stock deduction
  - Maize: inward and outward inclusive of bag; inventory remains on inclusive basis
- Stock As On Date quick report: Commodity, Stock, Bags, To Be Delivered, Saleable Stock
- Separate detailed stock control report
- FIFO stock valuation
- Tally invoice number, sale rate, commercial value and FIFO cost
- Customer and supplier returns
- Multi-state own and third-party godowns
- Bank pledge, release and physical/pledged/free stock report
- Bulk fumigation model
- Period closing database lock
- Excel/CSV import staging model
- Automated operational alerts

## Local setup

1. Create a Supabase project in Mumbai.
2. Install Supabase CLI and link the project.
3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Apply database migrations and seed:

```bash
supabase db push
supabase db seed
```

5. Create the first user in Supabase Auth, then make that user an administrator:

```sql
update public.profiles
set role_code = 'administrator'
where id = '<AUTH_USER_UUID>';
```

6. Install and run:

```bash
npm install
npm run dev
```

## Production deployment

1. Import this repository into Vercel.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Deploy the Supabase Edge Function in `supabase/functions/alerts`.
4. Schedule it using Supabase Cron.
5. Connect `erp.rajgurufoods.com` to Vercel.

## Security

- Never commit `.env.local` or service-role keys.
- The frontend uses only the Supabase publishable/anon key.
- All stock posting must go through `approve_and_post_transaction()`.
- Maker and approver cannot be the same user.
- Stock ledger and audit tables are append-only.
- Closed periods are checked during database posting.

## Current implementation boundary

The repository contains the production data model, database posting engine and core application screens. Before official go-live, complete actual-data UAT, add organisation-specific permission scopes, configure real masters, and test concurrent posting against the provisioned Supabase project.
