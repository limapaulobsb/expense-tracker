export const formatAmount = (num) => {
  let sign = '';
  if (num > 0) sign = '+';
  else if (num < 0) sign = '-';
  return `${sign} R$${Math.abs(num)}`;
};
