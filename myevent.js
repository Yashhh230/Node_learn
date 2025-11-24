const EventEmitter = require("events");

const event = new EventEmitter();

event.on("click", (name, message) => {
  console.log(name, "says", message);
});

event.emit("click", "yash", "hello");
