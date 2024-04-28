const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
});

export enum CurrencySymbols {
  euro = '€',
  euroFull = 'EUR',
}

const currencyFormatter = (val?: string | number | null, symbol?: string) => {
  if (val === null || val === undefined) return null;
  const value =
    typeof val === 'string'
      ? val.includes('.')
        ? parseFloat(val)
        : parseInt(val, 10)
      : val;

  // there happens to be an unprintable character inserted between the currency text
  // and the value (char-code: 160) hence the regex
  return formatter
    .format(value)
    .replace('EUR', symbol ?? CurrencySymbols.euro);
};

export default currencyFormatter;
