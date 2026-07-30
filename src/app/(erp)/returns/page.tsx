import PageHeader from '@/components/PageHeader';import TransactionForm from '@/components/TransactionForm';import { getMasterData } from '@/lib/queries';
export const dynamic='force-dynamic';
export default async function Page(){const master=await getMasterData();return <><PageHeader title="Returns" subtitle="Customer returns create inspection lots; supplier returns remove traceable FIFO stock."/><TransactionForm kind="return" master={master}/></>}
