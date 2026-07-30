import PageHeader from '@/components/PageHeader';import TransactionForm from '@/components/TransactionForm';import { getMasterData } from '@/lib/queries';
export const dynamic='force-dynamic';
export default async function Page(){const master=await getMasterData();return <><PageHeader title="Outward" subtitle="Sales dispatch with Tally invoice, commodity bag rules, FIFO cost and pledge-release checks."/><TransactionForm kind="outward" master={master}/></>}
