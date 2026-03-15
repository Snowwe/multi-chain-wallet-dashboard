export function formatIntegerWithCommas(value: string): string {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function rawToDecimalString(rawBalance: string, decimals: number): string {
  const raw = BigInt(rawBalance);
  const divisor = BigInt(10) ** BigInt(decimals);

  const integerPart = (raw / divisor).toString();
  const fractionPart = (raw % divisor).toString().padStart(decimals, '0').replace(/0+$/, '');

  return fractionPart ? `${integerPart}.${fractionPart}` : integerPart;
}

export function formatTokenBalance(
  rawBalance: string,
  decimals: number,
  maxFractionDigits = 6
): string {
  const raw = BigInt(rawBalance);
  const divisor = BigInt(10) ** BigInt(decimals);

  const integerPart = formatIntegerWithCommas((raw / divisor).toString());
  const fractionPart = (raw % divisor)
    .toString()
    .padStart(decimals, '0')
    .slice(0, maxFractionDigits)
    .replace(/0+$/, '');

  return fractionPart ? `${integerPart}.${fractionPart}` : integerPart;
}

export function calculateUsdValue(rawBalance: string, decimals: number, usdPrice: number): number {
  const normalized = Number(rawToDecimalString(rawBalance, decimals));

  return normalized * usdPrice;
}

export function formatUsd(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function shortenMiddle(value: string, start = 6, end = 4): string {
  if (!value || value.length <= start + end) {
    return value;
  }

  return `${value.slice(0, start)}...${value.slice(-end)}`;
}
