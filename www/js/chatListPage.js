document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'chatListPage') {
    setTitleOfPage(page);
    initChatList();
  }
});

function setTitleOfPage(page) {
    page.querySelector('.page-title').innerHTML = "Chat List of " + currentUser.name;
}

function initChatList() {
    for (i = 0; i < chatChannels.length; i++) {
        document.querySelector('#chatList').innerHTML += generateChatListItemAsHtml(chatChannels[i])
    }
}

function generateChatListItemAsHtml(chatChannel) {
    var channelName = chatChannel.name;

    if (chatChannel.messages.length === 0) {
        var messageRowHtml = "";

    } else{
        var lastMessage = chatChannel.messages[chatChannel.messages.length - 1];
        var author = lastMessage.author;
        var text = lastMessage.text;
        var hours = lastMessage.timestamp.getHours();
        var minutes = lastMessage.timestamp.getMinutes();
        var messageRowHtml = `
                <div class="message-row">
                    <span class="list-item__content">${author}: ${text}</span>
                    <span class="last-message-timestamp">${hours}:${minutes}</span>
                </div>
        `;
    }

    if (author === currentUser.name) {
        author = "You";
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return `
        <ons-list-item id="${channelName}" class="chat-list-item" onclick="chatListItemClicked(this.id)" modifier="longdivider" tappable>
            <div class="left">
                <img class="chat-thumbnail" src="img/black.png" alt="Avatar">
            </div>
            <div class="center">
                <div>
                    <span class="list-item__title"><b>${channelName}</b></span>
                </div>
                ${messageRowHtml}
            </div>
        </ons-list-item>
    `;
}


function chatListItemClicked(chatChannelId) {
    for (i = 0; i < chatChannels.length; i++) {
        if (chatChannels[i].name === chatChannelId) {
            currentChatChannel = chatChannels[i];
        }
    }
    document.querySelector('#myNavigator').pushPage('chatChannelPage.html');
}


function showCreateChatDialog() {
  var dialog = document.getElementById('dialog-create-chat');

  if (dialog) {
    dialog.show();
  }
}

function hideCreateChatDialog() {
  document
    .getElementById('dialog-create-chat')
    .hide();
}


function createChat() {
    if (validateCreateChatInput()) {
        var chatname = document.getElementById('input-chat-name').value;
        chatChannels.push(new ChatChannel(chatname));
        hideCreateChatDialog();
    }
}

function validateCreateChatInput() {
    var chatname = document.getElementById('input-chat-name').value;
    if (chatname === '') {
        hideCreateChatDialog();
        return false;
    }

    return true;
}