const clickObservable = Rx.Observable
.fromEvent(document, 'click')

function performRequest () {
return fetch('http://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
}

// Observable<Event> ---> Observable<Response>
const emailObservable = clickObservable
.mergeMap(click => performRequest(),
          (click, res) => res.email,
          3)

// mergeMap = map ... + ... mergeAll

emailObservable
.subscribe(x => console.log(x))
