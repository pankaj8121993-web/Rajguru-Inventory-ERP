import PageHeader from '@/components/PageHeader';import TransactionForm from '@/components/TransactionForm';import { getMasterData } from '@/lib/queries';
export const dynamic='force-dynamic';
export default async function Page(){const master=await getMasterData();return <><PageHeader title="Inward" subtitle="Purchase, farmer, auction, storage, opening and loose inward through one simple entry flow."/><TransactionForm kind="inward" master={master}/></>}
