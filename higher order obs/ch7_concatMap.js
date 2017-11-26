const clickObservable = Rx.Observable
.fromEvent(document, 'click')

function performRequest () {
return fetch('http://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
}

// Observable<Event> ---> Observable<Response>
const emailObservable = clickObservable
.concatMap(click => performRequest(),
          (click, res) => res.email,
          3)

// mergeMap = map ... + ... concatAll

/**
 * mergeMap - if you want everything concurent
 * switchMap - if you want to cancel previous things
 * concatMap - if you don't want to cancel previous tings
 */

emailObservable
.subscribe(x => console.log(x))
