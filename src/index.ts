/**
 * Convert an int to a fixed number of decimals string
 * @param number The number you want to convert
 * @param length The future size of the number
 * @returns A string of the number formatted
 */
export function sizedDecimal(number: number, length: number) {
  let pre = "";
  for (let i = 0; i < length; i += 1) {
    pre += "0";
  }
  const joined = pre + number.toString();
  return joined.slice(joined.length - length);
}

/**
 * Debounce a function
 * @param this Implicity passed
 * @param func The function that will be executed
 * @param timeout The duration of the debounce
 * @returns The handler function to execute
 */
export function debounce(this: any, func: Function, timeout = 300) {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

/**
 * Make the code stop for a given time
 * @param ms Time in ms to sleep
 * @returns The promise to await
 */
export async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Execute n times a function
 * @param times The number of time to run the function
 * @param func The function to run
 */
export function times(times: number, func: Function) {
  if (isNaN(times)) {
    console.error("times to run must be specified");
    return;
  }
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return;
  }
  Array.from(Array(times)).forEach(() => {
    func();
  });
}

/**
 * Generate a "random" number between (lower & upper included) two numbers
 * @param lower The lower number possible
 * @param upper The upper number possible
 * @returns A "random" number between (lower & upper included) lower and upper
 */
export function getRandomNumberInRange(lower: number = 0, upper: number = 10) {
  if (isNaN(lower) || isNaN(upper)) {
    console.error("lower and upper must be valid numbers");
    return;
  }
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

/**
 * Shorten a text and add ellipsis at the end of it
 * @param text The text to shorten
 * @param length Future length of the text
 * @param ellipsisCount The number of ellipsis to add
 * @returns The text shortened
 */
export function shorten(
  text: string | String,
  length: number = 10,
  ellipsisCount: number = 3
) {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`expecting a string, ${typeof text} provided`);
    return "";
  }
  if (isNaN(length) || isNaN(ellipsisCount)) {
    console.error("length and ellipsisCount must be valid numbers");
    return;
  }

  if (text.length <= length) {
    return text;
  }
  const ellipsis = Array.from(Array(ellipsisCount))
    .map(() => ".")
    .join("");
  return `${text.slice(0, length)}${ellipsis}`;
}

/**
 * Remove duplicates from an array
 * @param arr The array with duplicates
 * @returns The array without duplicates
 */
export function removeDuplicates(arr: Array<any>) {
  if (!Array.isArray(arr)) {
    console.error(`array expected, ${typeof arr} provided`);
    return;
  }
  return [...new Set(arr)];
}

/**
 * Mesure the time that a function take
 * @param func The function to mesure
 * @param label A label to identify the mesurement
 */
export async function measureTime(func: Function, label = "default") {
  if (typeof func !== "function") {
    console.error(`func must be a valid function, ${typeof func} provided`);
    return;
  }
  console.time(label);
  await func();
  console.timeEnd(label);
}

/**
 * Convert a string to slug
 * @param text The string to slugify
 * @returns The string slugified
 */
export function slugify(text: string | String) {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

/**
 * Convert a camel case text to snake case
 * @param text Camel case text to be converted
 * @returns Camel case text converted to snake case
 */
export function camelToSnakeCase(text: string | String) {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  return text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

/**
 * Convert a snake case to camel case
 * @param text Snake case text to be converted
 * @returns Snake case text converted to camel case
 */
export function snakeToCamelCase(text: string | String) {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  return text
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
}

/**
 * Convert a string to a color
 * @param text The string to convert
 * @returns The color
 * @example
 * stringToColor("hello world") // #e0e0e0
 */
export function stringToColor(text: string | String) {
  if (!(typeof text === "string" || text instanceof String)) {
    console.error(`string expected, ${typeof text} provided`);
    return text;
  }
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}

export function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

export default {
  sizedDecimal,
  debounce,
  sleep,
  times,
  getRandomNumberInRange,
  shorten,
  removeDuplicates,
  measureTime,
  slugify,
  camelToSnakeCase,
  snakeToCamelCase,
  stringToColor,
  chunk,
};
