document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'chatListPage') {
    page.querySelectorAll('.chat-list-item').forEach(function(chatItem, index) {
        chatItem.onclick = function() {
            document.querySelector('#myNavigator').pushPage('chatChannelPage.html', {data: {title: 'Chat Channel Page'}});
        };
    });
  }
});