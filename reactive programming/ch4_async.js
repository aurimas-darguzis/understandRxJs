const requestStream = Rx.Observable.just('https://api.github.com/users');

const responseSream = requestStream
    .flatMap(requestUrl => {
        Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
    });

responseSream.subscribe(response => {
    console.log(response);
});

/**
 * flatMap
 * 
 * It basically flattens the meta stream that we got as output, after it maps.
 * That's basically what it does. In other words, it's emitting on the trunk
 * stream everything that happens on these branch streams, and then it looks nice.
 * flatMap is kind of like promise.then. You can think of it as that.
 */