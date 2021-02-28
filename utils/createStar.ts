import {
  MAX_STAR_COUNT,
  MAX_X_POSITION,
  SPAWN_AREA,
  VALUE,
} from './globalConstants';

export const createStar = (addToStorage: (...args) => void): void => {
  const X: number = Math.random() * MAX_X_POSITION;
  const timeOut: number = Math.floor(
    Math.random() * (SPAWN_AREA.max - SPAWN_AREA.min + 1) + SPAWN_AREA.min,
  );
  let starValue: number = VALUE.without;
  while (starValue === VALUE.without) {
    starValue = Math.floor(
      Math.random() * (VALUE.max - VALUE.min + 1) + VALUE.min,
    );
  }
  addToStorage((prev) => {
    if (prev.length < MAX_STAR_COUNT)
      prev.push({ x: X, y: timeOut, value: starValue });
    return prev;
  });
};
