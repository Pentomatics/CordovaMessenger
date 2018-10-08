document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'loginPage') {
    page.querySelector('#sign-in-button').onclick = onSignInButtonPress;
    page.querySelector('#sign-up-button').onclick = onSignUpButtonPress;
  }
});

function onSignInButtonPress() {
    if(validateInputs()) {
        var username = document.getElementById('input-username').value;
        var password = document.getElementById('input-password').value;
        password = md5(password);

        var user = getUserByName(username);

        if (user instanceof User) {
            if (password === user.password) {
                currentUser = user;
                document.querySelector('#myNavigator').pushPage('chatListPage.html');

            } else {
                ons.notification.alert('Incorrect password.');
            }
        } else {
           ons.notification.alert('User does not exist');
        }
    }
}

function onSignUpButtonPress() {
    if (validateInputs()) {
        var username = document.getElementById('input-username').value;
        var password = document.getElementById('input-password').value;
        password = md5(password);

        var user = getUserByName(username);

        if (user instanceof User) {
            ons.notification.alert('User already exists');
        } else {
            currentUser = createNewUser(username, password);
            document.querySelector('#myNavigator').pushPage('chatListPage.html');
        }
    }
}

function validateInputs() {
    var username = document.getElementById('input-username').value;
    var password = document.getElementById('input-password').value;

    if (username === '' || password === '') {
        ons.notification.alert('Empty username or password.');
        return false;
    }

    return true;
}

function createNewUser(username, password) {
    var user = new User(username, password);
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