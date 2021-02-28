export const getNormalizeTime = (time: number): string => {
  const toSec: number = Math.floor(time / 1000);
  const seconds: number = toSec % 60;
  const minutes: number = Math.floor((toSec / 60) % 60);
  if (minutes > 0) return `${minutes} min ${seconds} sec`;
  else return `${seconds} sec`;
};
