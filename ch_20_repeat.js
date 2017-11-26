const foo = Rx.Observable.interval(500)
.zip(Rx.Observable.of('a','b','c','d',2), (x, y )=> y)

const bar = foo.map(x => x.toUpperCase())

/**
* --a--b--c--d--2| (foo)
* map(toUpperCase)
* --A-B--C--D--#   (bar) next/error/complete
*
* repeat
* --A-B--C--D--A-B--C--D--A-B--C--D|
*/
const result = bar.repeat(3)

result.subcribe(
function (x) { console.log(`next ${x}`)},
function (err) { console.log(`error ${err}`)},
function () { console.log('done')}
)
