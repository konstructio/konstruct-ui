export const getFormattedTime = (time: Date, format: '12' | '24') => {
  if (format === '12') {
    return `${time.getHours() % 12 || 12}:${time.getMinutes().toString().padStart(2, '0')} ${time.getHours() >= 12 ? 'PM' : 'AM'}`;
  }

  return `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
};

export const getHours = (time: Date) => {
  return time.getHours();
};

export const getMinutes = (time: Date) => {
  return time.getMinutes();
};
