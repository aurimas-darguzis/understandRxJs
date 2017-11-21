const foo = Rx.Observable.interval(500).take(4)
const bar = Rx.Observable.interval(300).take(5)

/**
 * ----0----1----2----(3|)  foo()
 * --0--1--2--3--(4|)       bar()
 *     merge (OR operator)
 * --0-01--21-3--(24|)-(3|)
 */


const merged = Rx.Observable.merge(foo, bar)

merged.subscribe(
    function (x) { console.log(`next: ${x}`)},
    function (err) { console.log(`Error: ${err}`)},
    function () { console.log('done')}
)
