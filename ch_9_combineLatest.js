const foo = Rx.Observable.interval(500).take(4)
const bar = Rx.Observable.interval(300).take(5)

/*
----0----1----2----(3|)     (foo)
--0--1--2--3--(4|)          (bar)
    combineLatest((x, y) => x + y)
    combineLatest is like AND operator
*/

const combined = Rx.Observable.combineLatest(foo, bar,
    (x, y) => { x + y })

combined.subscribe(
    function (x) { console.log(`next ${x}`)},
    function (err) { console.log(`error ${err}`)},
    function () { console.log('done') }
)
