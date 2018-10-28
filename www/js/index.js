
var currentUser;
var currentChatChannel;
var users = [];
var chatChannels = [];

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

class ChatChannel {
  constructor(name) {
    this.name = name;
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


chatChannels.push(new ChatChannel("The most epic Channel"));
chatChannels[0].messages.push(new TextMessage("Harald", "Servus", new Date()));
chatChannels[0].messages.push(new TextMessage("Cute Kitty 3", "Weeeeee, can't wait :D", new Date()));

chatChannels.push(new ChatChannel("HS-Mannheim"));
chatChannels[1].messages.push(new TextMessage("Harald", "Servus", new Date()));

chatChannels.push(new ChatChannel("5IB"));

