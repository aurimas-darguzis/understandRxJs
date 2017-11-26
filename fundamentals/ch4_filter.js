const foo = Rx.Observable.interval(1000)

// --0--1--2--3--4--5--6--7-
// filter(predicate) === filter(x => true/false)
// filter(x => x % 2 === 0)
// --0-----2-----4-----6---

const bar = foo.filter(x => x % 2 == 0)

bar.subscribe(
    function (x) { console.log(`next ${x}`)},
    function (err) { console.log(`error ${err}`)},
    function () { console.log('done')}
)
