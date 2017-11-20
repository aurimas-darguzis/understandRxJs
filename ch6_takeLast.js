const foo = Rx.Observable.interval(1000).take(5)

// --0--1--2--3--4--5--6--7-...
// take(5)
// --0--1--2--3--4 (foo)
// takeLast(2)
// -----------(34|) (bar)
// last()
// -----------(4|)

const bar = foo.takeLast(2)
const bar = foo.last()

bar.subscribe(
    function (x) { console.log(`next ${x}`)},
    function (err) { console.log(`error ${err}`)},
    function () { console.log('done')}
)
