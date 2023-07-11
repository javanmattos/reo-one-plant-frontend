import { TimeUnits } from "../types";

export const MAX_TIME = 15 * 60;

/**
 * Gets the hours, minutes, and seconds from the given `totalSeconds`.
 * @param totalSeconds The total seconds from a timer.
 * @returns An object with the hours, minutes, and seconds from the given time.
 */
export const getTimeUnits = (totalSeconds: number): TimeUnits => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = totalSeconds % 60;
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

/**
 * Formats the given time units into a string in the format of `mm:ss`.
 * @param minutes The minutes in a counter or countdown.
 * @param seconds The seconds in a counter or countdown.
 * @returns A string in the format of `mm:ss`.
 */
export const formatTimer = (minutes: number, seconds: number): string => {

  let timeString = (minutes < 0 || seconds < 0) ? "--:--" : `${formatNumber(minutes)}:${formatNumber(seconds)}`;
  return timeString;
};

/**
 * Formats the given time units into a string in the format of `hh:mm:ss`.
 * @param lifespan The total plant lifespan in seconds.
 * @returns A string in the format of `hh:mm:ss`.
 */
export const formatLifespan = (lifespan: number): string => {
  const { hours, minutes, seconds } = getTimeUnits(lifespan);
  
  const minutesAndSeconds = formatTimer(minutes, seconds);
  return `${formatNumber(hours)}:${minutesAndSeconds}`;
};

/**
 * Formats the given number by adding a 0 in front of the number if it is a
 * single digit number.
 *
 * NOTE: Only **positive integers** should be used with this function.
 * @param num A positive integer.
 * @returns A formatted string of the given number.
 */
export const formatNumber = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};