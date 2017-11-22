const foo = Rx.Observable.interval(500).take(4)
const bar = Rx.Observable.interval(300).take(5)


const combined = Rx.Observable.combineLatest(foo, bar,
    (x, y) => { x + y })

combined.subscribe(
    function (x) { console.log(`next ${x}`)},
    function (err) { console.log(`error ${err}`)},
    function () { console.log('done') }
)
