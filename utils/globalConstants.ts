type STAR = {
  maxCount: number;
  xMax: number;
  yMax: number;
  stepMin: number;
  stepMax: number;
  baseStep: number;
  valueMin: number;
  valueMax: number;
  valueWithout: number;
  ySpawnMin: number;
  ySpawnMax: number;
};

export const STAR: STAR = {
  maxCount: 3,
  xMax: 690,
  yMax: 850,
  stepMin: 1,
  stepMax: 15,
  baseStep: 5,
  valueMin: -5,
  valueMax: 5,
  valueWithout: 0,
  ySpawnMin: -100,
  ySpawnMax: -600,
};

/**
 * Star step in miliseconds
 */
export const UPDATE_DELAY: number = 20;
