
var currentUser;
var users = [];
var chatChannels = [];

class User {
  constructor(name) {
    this.name = name;
  }
}

class ChatChannel {

  constructor(users) {
    this.users = users;
    this.messages = [];
  }
}

class Message {
  constructor(author, text, timestamp) {
    this.author = author;
    this.text = text;
    this.timestamp = timestamp;
  }
}