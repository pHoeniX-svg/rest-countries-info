function format(num: number) {
  return new Intl.NumberFormat('en-US').format(num);
}

export { format };
