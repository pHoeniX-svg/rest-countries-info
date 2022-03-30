function format(value: number | string[]): string {
  if (typeof value === 'number') {
    return new Intl.NumberFormat('en-US').format(value);
  } else {
    return new Intl.ListFormat('en-US', {
      style: 'long',
      type: 'conjunction',
    }).format(value);
  }
}

export { format };
