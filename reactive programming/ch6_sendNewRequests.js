const refreshButton = document.querySelector('.selector');
const refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

const startupRequestStream = Rx.Observable.of('https://api.github.com/users');
const requestOnRefreshStream = refreshClickStream
    .map(ev => {
        const randomOffset = Math.floor(Math.random() * 500);
        return `https://api.github/users?since=${randomOffset}`;
    });

const responseStream = startupRequestStream.merge(requestOnRefreshStream)
    .flatMap(requestUrl => {
        Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
    });

function createSuggestionStream(responseStream) {
    return responseStream.map(listUser => {
        listUser[Math.floor(Math.random() * listUser.length )]
    })
    .startWith(null)
    .merge(refreshClickStream.map(ev => null));
}

const suggestion1Stream = createSuggestionStream(responseStream);
const suggestion2Stream = createSuggestionStream(responseStream);
const suggestion3Stream = createSuggestionStream(responseStream);

// Rendering -------------------------------------------------------
function renderSuggestion(suggestedUser, selector) {
    const suggestionEl = document.querySelector(selector);
    if (suggestedUser === null) {
        suggestionEl.style.visibility = 'hidden';
    } else {
        suggestionEl.style.visibility = 'visible';
        const usernameEl = suggestionEl.querySelector('.username');
        usernameEl.href = suggestedUser.html_url;
        usernameEl.textContent = suggestedUser.login;
        const imgEl = suggestionEl.querySelector('img');
        imgEl.src = '';
        imgEl.src = suggestedUser.avatar_url;
    }
}

suggestion1Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion1');
});
suggestion2Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion2');
});
suggestion3Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion4');
});
