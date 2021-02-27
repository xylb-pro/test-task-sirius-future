import { MAX_X_POSITION, TIME_OUT, VALUE } from './globalConstants';

export const createStar = (addToStorage) => {
  const X = Math.random() * MAX_X_POSITION;
  const timeOut = Math.floor(
    Math.random() * (TIME_OUT.max - TIME_OUT.min + 1) + TIME_OUT.min,
  );
  const starValue =
    Math.floor(Math.random() * (VALUE.max - VALUE.min + 1) + VALUE.min) | 1;
  addToStorage((prev) => {
    prev.push({ x: X, y: timeOut, value: starValue });
    return prev;
  });
};
