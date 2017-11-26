const foo = Rx.Observable.of(1, 2, 3, 4, 5)

// foo.map
// foo.filter
// foo.merge
// foo.combineLatest

function multiplyBy(multipier) {
  const source = this
  const result = Rx.Observable.create(function subscribe(observer) {
    source.subscribe(
      function (x) { observer.next(x * multipier) },
      function (err) { observer.error(err) },
      function () { observer.complete() }
    );
  });
  return result
}

Rx.Observable.prototype.multiplyBy = multiplyBy

const bar = foo.multiplyBy(100)

bar.subscribe(
  function (x) { console.log(`next ${x}`) },
  function (err) { console.log(`error ${err}`) },
  function () { console.log('done') },
)

// "next 100"
// "next 200"
// "next 300"
// "next 400"
// "next 500"
// "done"