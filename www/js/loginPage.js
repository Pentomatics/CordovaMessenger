document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'loginPage') {
    page.querySelector('#login-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('chatListPage.html', {data: {title: 'Chat List Page'}});
    };
  }
});