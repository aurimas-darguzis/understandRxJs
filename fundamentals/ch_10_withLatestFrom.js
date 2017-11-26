const foo = Rx.Observable.interval(500).take(5)
  .zip(Rx.Observable.of('H', 'e', 'l', 'l','o'), (_, c) => c)
const bar = Rx.Observable.interval(300).take(7)
  .zip(Rx.Observable.of(0, 1, 0, 1, 0, 1, 0), (_, x) => x)

/*
----H----e----l----l----o|
--0--1--0--1--0--1--0|
  withLatestFrom((c, n) => n === 1 ? c.toUpperCase() : c.toLowerCase())
----h----e----L----L----o|
*/

const combined = foo.withLatestFrom(bar, (c, n) => n === 1 ? 
  c.toUpperCase() : c.toLowerCase())


combined.subscribe(
  function (x) { console.log(`next ${x}`)},
  function (err) { console.log(`error ${err}`)},
  function () { console.log('done')}
)
