import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Rajguru Foods Inventory ERP', description: 'Ledger-driven agricultural inventory ERP' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
