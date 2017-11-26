const foo = Rx.Observable.interval(500).take(5)
const bar = Rx.Observable.interval(400).take(4)

/**
 * ----0----1----2----3----4| (foo)
 * ---0---1---2---3|          (bar)
 *  zip((x, y) => x+ y)
 * ----0----2----4----6|
 *
 * First of foo + First of bar = First of output
 * Second of foo + Second of bar = Second of output
 * ...
 * n-th of foo + n-th of bar => n-th of output
 */

const combined = foo.zip(bar, (x, y) => x + y)

combined.subscribe(
  function (x) { console.log(`next ${x}`)},
  function (err) { console.log(`error ${err}`)},
  function () { console.log('done')}
)
