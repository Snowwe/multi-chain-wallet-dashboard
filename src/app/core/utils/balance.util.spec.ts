import { formatTokenBalance } from './balance.util';

describe('formatTokenBalance', () => {
  it('should format EVM raw balance with up to 6 fraction digits', () => {
    const result = formatTokenBalance('12847231000000000000', 18);

    expect(result).toBe('12.847231');
  });

  it('should format integer balance with thousand separators', () => {
    const result = formatTokenBalance('1250000000', 6);

    expect(result).toBe('1,250');
  });

  it('should trim trailing zeros in the fractional part', () => {
    const result = formatTokenBalance('842150000', 6);

    expect(result).toBe('842.15');
  });

  it('should return only integer part when fraction is zero', () => {
    const result = formatTokenBalance('1000000000', 6);

    expect(result).toBe('1,000');
  });

  it('should limit fraction to 6 digits', () => {
    const result = formatTokenBalance('154782145987654321000', 18);

    expect(result).toBe('154.782145');
  });

  it('should format Solana raw balance correctly', () => {
    const result = formatTokenBalance('84254781000', 9);

    expect(result).toBe('84.254781');
  });
});
