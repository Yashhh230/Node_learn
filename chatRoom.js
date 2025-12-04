const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }

  sendMessage(user, message) {
    if (this.users.has(user)) {
      this.emit("message", user, message);
    }
  }
  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("leave", user);
    }
  }
}
module.exports = ChatRoom;
