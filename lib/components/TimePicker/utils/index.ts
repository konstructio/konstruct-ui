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

/**
 * Parses a time string and returns a Date object.
 * Supports formats: "HH:MM", "H:MM", "H:M", "HH:MM AM/PM", "H:MM AM/PM", "H:M AM/PM"
 */
export const parseTimeString = (
  value: string,
  format: '12' | '24',
): Date | null => {
  const trimmed = value.trim().toUpperCase();

  if (format === '12') {
    // Match patterns like "1:30 PM", "12:00 AM", "1:30PM", "12:00AM", "1:5 PM"
    const match12 = trimmed.match(/^(\d{1,2}):(\d{1,2})\s*(AM|PM)?$/i);
    if (match12) {
      let hours = parseInt(match12[1], 10);
      const minutes = parseInt(match12[2], 10);
      const meridian = match12[3]?.toUpperCase();

      if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
        return null;
      }

      if (meridian === 'PM' && hours !== 12) {
        hours += 12;
      } else if (meridian === 'AM' && hours === 12) {
        hours = 0;
      }

      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
    }
  } else {
    // 24-hour format: "13:30", "09:00", "9:00", "9:5"
    const match24 = trimmed.match(/^(\d{1,2}):(\d{1,2})$/);
    if (match24) {
      const hours = parseInt(match24[1], 10);
      const minutes = parseInt(match24[2], 10);

      if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return null;
      }

      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
    }
  }

  return null;
};
