export function calculateDday(startDateStr: string) {
  const start = new Date(startDateStr);
  const today = new Date();
  
  const diffTime = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  let years = today.getFullYear() - start.getFullYear();
  const m = today.getMonth() - start.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < start.getDate())) {
    years--;
  }
  
  return `+${diffDays}일, ${years}주년`;
}
