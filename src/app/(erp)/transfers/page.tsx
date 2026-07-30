import PageHeader from '@/components/PageHeader';import TransactionForm from '@/components/TransactionForm';import { getMasterData } from '@/lib/queries';
export const dynamic='force-dynamic';
export default async function Page(){const master=await getMasterData();return <><PageHeader title="Internal Transfers" subtitle="Godown and zone movement creates a new destination lot while carrying FIFO and source lineage."/><TransactionForm kind="transfer" master={master}/></>}
