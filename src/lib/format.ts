export function mt(v:number|string|null|undefined,dp=3){return (Number(v||0)/1000).toLocaleString('en-IN',{minimumFractionDigits:dp,maximumFractionDigits:dp})+' MT'}
export function money(v:number|string|null|undefined){return '₹'+Number(v||0).toLocaleString('en-IN',{maximumFractionDigits:0})}
