document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'loginPage') {
    page.querySelector('#login-button').onclick = onLoginButtonPress;
  }
});



function onLoginButtonPress() {
    var username = document.getElementById('input-username').value;

    if (userExists(username)) {
        currentUser = getUserByName(username);
        document.querySelector('#myNavigator').pushPage('chatListPage.html', {data: {title: 'Chat List Page'}});
    } else {
        currentUser = createNewUser(username);
        document.querySelector('#myNavigator').pushPage('chatListPage.html', {data: {title: 'Chat List Page'}});
    }
}


function userExists(username) {
    if (username === null) {
        return false;
    }

    for (i = 0; i < users.length; i++) {
        if (users[i].name === username) {
            return true;
        }
    }

    return false;
}

function createNewUser(username) {
    var user = new User(username);
    users.push(user);
    return user;
}

function getUserByName(name) {
    for (i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            return users[i];
        }
    }
}