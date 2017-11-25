const foo = Rx.Observable.interval(500).take(5)

/**
 * --0--1--2--3--4|
 *  delay(1000)
 * -------0--1--2--3--4|
 */

const result = foo

result.subscribe(
  function (x) { console.log(`next ${x}`)},
  function (err) { console.log(`error ${err}`)},
  function () { console.log('done')}
)