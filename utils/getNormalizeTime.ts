export const getNormalizeTime = (time: number) => {
  const toSec = Math.floor(time / 1000);
  const seconds = toSec % 60;
  const minutes = Math.floor((toSec / 60) % 60);
  if (minutes > 0) return `${minutes} min ${seconds} sec`;
  else return `${seconds} sec`;
};
