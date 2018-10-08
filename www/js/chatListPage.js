document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'chatListPage') {
    setTitleOfPage(page);
    initChatList();
    addOnClickListenerToChatItems(page);
  }
});

function setTitleOfPage(page) {
    page.querySelector('.page-title').innerHTML = "Chat List of " + currentUser.name;
}

function initChatList() {
    for (i = 0; i < users.length; i++) {
        if (users[i] !== currentUser) {
            var lastMessage = new TextMessage("a", "Hallo Weeeelt", new Date());
            document.querySelector('#chatList').innerHTML += generateChatListItemAsHtml(users[i].name, lastMessage)
        }
    }
}

function generateChatListItemAsHtml(chatname, lastMessage = "") {
    var author = lastMessage.author;
    var text = lastMessage.text;
    var hours = lastMessage.timestamp.getHours();
    var minutes = lastMessage.timestamp.getMinutes()

    if (author === currentUser.name) {
        author = "You";
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return `
        <ons-list-item class="chat-list-item" modifier="longdivider" tappable>
            <div class="left">
                <img class="chat-thumbnail" src="img/black.png" alt="Avatar">
            </div>
            <div class="center">
                <div>
                    <span class="list-item__title"><b>${chatname}</b></span>
                </div>
                <div class="message-row">
                    <span class="list-item__content">${author}: ${text}</span>
                    <span class="last-message-timestamp">${hours}:${minutes}</span>
                </div>
            </div>
        </ons-list-item>
    `;
}

function addOnClickListenerToChatItems(page) {
    page.querySelectorAll('.chat-list-item').forEach(function(chatItem, index) {
        chatItem.onclick = function() {
            document.querySelector('#myNavigator').pushPage('chatChannelPage.html', {data: {title: 'Chat Channel Page'}});
        };
    });
}