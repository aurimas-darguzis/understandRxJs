const foo = Rx.Observable.interval(1000)

// --0--1--2--3--4--5--6--7-
// take(5)
// --0--1--2--3--4

// first()
// --0

// skip(5)
// -----------------5--6-7-

const bar = foo.take(5)
const bar = foo.first() // takes first value

bar.subscribe(
    function (x) { console.log(`next ${x}`)},
    function (err) { console.log(`error ${err}`)},
    function () { console.log('done')}
)
