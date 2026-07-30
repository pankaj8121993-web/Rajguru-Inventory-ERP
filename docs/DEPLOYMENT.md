# Deployment Runbook

## Supabase

Create separate Development, UAT and Production projects in Mumbai. Apply migrations in order and run seed data only in Development/UAT.

Create the first user in Supabase Auth, then grant administrator role:

```sql
update public.profiles set role_code='administrator' where id='<AUTH_USER_UUID>';
```

Deploy the `alerts` Edge Function and schedule it with Supabase Cron.

## Vercel

Import this GitHub repository into Vercel and add:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL`

Use `main` for Production, `uat` for user acceptance testing and `develop` for development. Connect `erp.rajgurufoods.com` only after UAT.

## Go-live checklist

- Commodity bag and weight rules approved
- Multi-state godowns, GSTINs and ownership verified
- Users and approval roles assigned
- Opening lots and FIFO rates reconciled
- Active sales orders and bank pledges imported
- Concurrent outward and transfer posting tested
- Period close and reopening tested
- Database and Storage backups configured and restore-tested
- Actual Rajguru transaction UAT signed off
