
var currentUser;
var users = [];
var chatChannels = [];

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

class ChatChannel {
  constructor(users) {
    this.users = users;
    this.messages = [];
  }
}

class TextMessage {
  constructor(author, text, timestamp) {
    this.author = author;
    this.text = text;
    this.timestamp = timestamp;
  }
}


users.push(new User("Cute Kitty 3", md5("abc")));
users.push(new User("Harald", md5("abc")));