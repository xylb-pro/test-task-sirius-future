export const getNormalizeTime = (time: number) => {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 24);
  if (minutes > 0) return `${minutes} min ${seconds} sec`;
  else return `${seconds} sec`;
};
