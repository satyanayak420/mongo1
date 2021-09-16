const os = require("os");
const cluster = require("cluster");

const glob = require("glob");
const imageScale = require("./image-scale-single");
(async () => {
  await Promise.all(
    glob
      .sync("./images/*.jpeg")
      .filter((img) => img.indexOf("_small") < 0)
      .map(imageScale)
  );
})();
// Promise.resolve("stya").then((res) => console.log(res));
// const prom1 = Promise.resolve("something gone wrong", 2300);
// const prom = Promise.resolve("Good morning", 3000);

// Promise.race([prom1, prom]).then((res) => console.log(res));
// setImmediate(() => {
//   console.log("iMMsediate values");
// });
// process.nextTick(() => {
//   console.log("Values");
// });
console.log(os.cpus());
