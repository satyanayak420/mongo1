const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("testdriven", () => {
  console.log("event succesfull");
});

myEmitter.emit("testdriven");
var promise = new Promise((resolve, reject) => {
  resolve("hi everyone");
});

promise.then((res) => console.log(res));
