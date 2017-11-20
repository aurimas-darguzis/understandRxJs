const foo = Rx.Observable.interval(200).take(4)

// do is usefull for debugging purpose
// it returns the value
// do does not invokes subscription
const bar = foo.do(function (x) {
    console.log(`! ${x}`)
})

bar.subscribe(
    function (x) { console.log(`next ${x}`)},
    function (err) { console.log(`error ${err}`)},
    function () { console.log('done')}
)
