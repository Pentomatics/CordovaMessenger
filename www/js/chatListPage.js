document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'chatListPage') {
    setPageTitle(page);
    addOnClickListenerToChatItems(page);
  }
});


function setPageTitle(page) {
    page.querySelector('.page-title').innerHTML = "Chat List of " + currentUser.name;
}


function addOnClickListenerToChatItems(page) {
    page.querySelectorAll('.chat-list-item').forEach(function(chatItem, index) {
        chatItem.onclick = function() {
            document.querySelector('#myNavigator').pushPage('chatChannelPage.html', {data: {title: 'Chat Channel Page'}});
        };
    });
}