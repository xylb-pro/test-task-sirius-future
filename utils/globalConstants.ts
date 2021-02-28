export const MAX_STAR_COUNT: number = 3;
export const MAX_X_POSITION: number = 690;
export const MAX_Y_POSITION: number = 850;
/**
 * Star step in pixels
 */
export const STAR_STEP: number = 5;
/**
 * Star step in miliseconds
 */
export const STAR_STEP_MS: number = 20;
/**
 * Вelay between spawning stars at start
 */
export const BASE_SPAWN_DELAY: number = 3000;
/**
 * Spawn coordinates spread of the star
 */
export const SPAWN_AREA: { [key: string]: number } = {
  min: -100,
  max: -1000,
};
/**
 * Possible star values
 */
export const VALUE: { [key: string]: number } = {
  min: -5,
  max: 5,
  without: 0,
};
