document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'chatChannelPage') {
    page.querySelector('.page-title').innerHTML = currentChatChannel.name;
  }
});

function submitMessage() {
    var text = document.getElementById('input-message').value;
    document.getElementById('input-message').value = "";
    var message = new TextMessage(currentUser.name, text, new Date());
    document.querySelector('#messageList').innerHTML += generateMessageListItemAsHtml(message)
}

function generateMessageListItemAsHtml(message) {
    var author = message.author;
    var messageContent = message.text;
    var hours = message.timestamp.hours;
    var minutes = message.timestamp.minutes;

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return `
            <ons-list-item class="message-item" modifier="longdivider" tappable>
                <div class="left">
                    <img class="chat-thumbnail" src="img/black.png" alt="Avatar">
                </div>
                <div class="center">
                    <div>
                        <span class="list-item__title"><b>${author}</b></span>
                    </div>
                    <div class="message-row">
                        <span class="list-item__content">${messageContent}</span>
                        <span class="last-message-timestamp">19:00</span>
                    </div>
                </div>
            </ons-list-item>
    `;
}