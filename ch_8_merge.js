const foo = Rx.Observable.interval(500).take(4)
const bar = Rx.Observable.interval(300).take(5)

const merged = Rx.Observable.merge(foo, bar)