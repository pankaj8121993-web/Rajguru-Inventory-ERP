import Sidebar from '@/components/Sidebar';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
export default async function ERPLayout({children}:{children:React.ReactNode}){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect('/login');return <div className="shell"><Sidebar/><main className="main"><header className="topbar"><div><b>Rajguru Foods Inventory ERP</b><div className="muted" style={{fontSize:9}}>PostgreSQL ledger · FIFO · maker-checker</div></div><div style={{fontSize:10}}>{user.email}</div></header><div className="content">{children}</div></main></div>}
