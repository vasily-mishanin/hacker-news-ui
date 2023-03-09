export function getCuttedString(str: string, length: number) {
  return str.slice(0, length) + '...';
}

export function getDateString(time: number) {
  return time
    ? new Date(time * 1000).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';
}
