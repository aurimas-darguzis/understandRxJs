const foo = Rx.Observable.interval(500).take(4)
const more = Rx.Observable.of(4, 5, 6, 7, 8, 9)
const prefix = Rx.Observable.of('a')

/* 
--0--1--2--3--4--5--6--7-...
    take(4)
--0--1--2--3 (foo)
(456789|)    (more)
*/

const bar = foo.concat(more) // => --0--1--2--3(456789|)
const bar = prefix.concat(foo) // => a--0--1--2--3
const bar = foo.startWith('a') // prefix.concat(foo)

bar.subscribe(
    function (x) { console.log(`next ${x}`)},
    function (err) { console.log(`error ${err}`)},
    function () { console.log('done')}
)
