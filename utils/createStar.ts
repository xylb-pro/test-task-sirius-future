import { MAX_X_POSITION, SPAWN_AREA, VALUE } from './globalConstants';

export const createStar = (addToStorage) => {
  const X = Math.random() * MAX_X_POSITION;
  const timeOut = Math.floor(
    Math.random() * (SPAWN_AREA.max - SPAWN_AREA.min + 1) + SPAWN_AREA.min,
  );
  let starValue = VALUE.without;
  while (starValue === VALUE.without) {
    starValue = Math.floor(
      Math.random() * (VALUE.max - VALUE.min + 1) + VALUE.min,
    );
  }
  addToStorage((prev) => {
    prev.push({ x: X, y: timeOut, value: starValue });
    return prev;
  });
};
