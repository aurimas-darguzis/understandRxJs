const refreshButton = document.querySelector('.refresh');

const requestStream = Rx.Observable.of('https://api.github.com/users');

// flatMap is now an alias for mergeMap
// but will work just the same.

const responseStream = requestStream // emits an array of users
    .flatMap(requestUrl => {
       Rx.Observable.fromPromise(jQuery.getJSON(requestUrl)) 
    });

// given the response stream it will .map the responseStream to one random user
function createSuggestionStream(responseStream) {
    return responseStream.map(listUser => {
        listUser[Math.floor(Math.random() * listUser.length)]
    });
}

const suggestion1Stream = createSuggestionStream(responseStream);
const suggestion2Stream = createSuggestionStream(responseStream);
const suggestion3Stream = createSuggestionStream(responseStream);

/**
 * 
 * @param {returned by GitHub API} userData 
 * @param {put user data inside the selector} selector 
 * 
 * Let's get the data, get the element behind that selector, and put the data
 * in that element. Let's go again and get our element behind that selector.
 * Let's get the username link in that element which is `.username` class.
 * We can get the href and put userData.html_url. We can do usernameEl and we can set
 * the textContent to be userData.login.
 */
function renderSuggestion(userData, selector) {
    const element = document.querySelector(selector);
    const usernameEl = element.querySelector('.username');
    usernameEl.href = userData.html_url;
    usernameEl.textContent = userData.login;
    const imgEl = element.querySelector('img');
    imgEl.src = userData.avatar_url;
}

/**
 * Now that we have the streams, they don't do anything by themselves. That's the idea of event streams.
 * You need to always add an event listener or `subscribe` to them and then you have your `user`.
 * Inside here, we finally have one single `user`, not an array. We need to render that to the DOM here.
 */
suggestion1Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion1');
});

suggestion2Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion1');
});

suggestion3Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion1');
});


/**
 * 
 */