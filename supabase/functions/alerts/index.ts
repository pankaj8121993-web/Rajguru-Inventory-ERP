import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
Deno.serve(async()=>{const client=createClient(Deno.env.get('SUPABASE_URL')!,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);const {data,error}=await client.rpc('generate_operational_alerts');return new Response(JSON.stringify({data,error}),{headers:{'content-type':'application/json'},status:error?500:200})});
