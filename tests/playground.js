const {
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
  getTimeBetween,
} = require("../lib/cjs/index");

const main = async () => {
  /** sizedDecimal */
  // console.log(sizedDecimal(5, 2));
  /** debounce */
  // const handler = debounce(() => {
  //   console.log("here");
  // });
  // handler();
  // handler();
  // handler();
  /** sleep */
  // console.log("1");
  // await sleep(1000);
  // console.log("2");
  /** times */
  // times(3, () => console.log("hello"));
  /** getRandomNumberInRange */
  // console.log(getRandomNumberInRange(0, 10));
  /** shorten */
  // console.log(shorten("Hello, World!", 4, 2));
  /** removeDuplicates */
  // console.log(removeDuplicates([0, 2, 3, 0, 2, 5]));
  /** measureTime */
  // measureTime(async () => {
  //   await sleep(1000);
  // }, "test");
  /** slugify */
  // console.log(slugify("Wow that's insane!"));
  /** camelToSnakeCase */
  // console.log(camelToSnakeCase("camelCaseToSnakeCase"));
  /** snakeToCamelCase */
  // console.log(snakeToCamelCase("snake-case_to_camel-case"));
  /** stringToColor */
  // console.log(stringToColor("Hello, World!"));
  /** getTimeBetween */
  // console.log(getTimeBetween(new Date("2020-01-01"), new Date("2020-01-02")));
};

main();
