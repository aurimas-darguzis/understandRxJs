const foo = Rx.Observable.interval(1000)

/*

foo: ----0---1---2---3--...
          multiplyBy(2)
bar: ----0---2---4---6--...

*/

function calculate (transformationFn) {
  const source = this;
  const result = Rx.Observable.create(function subscribe (observer) {
    source.subscribe(
      function (x) { observer.next(transformationFn(x)) },
      function (err) { observer.error(err) },
      function () { observer.complete() }
    )
  })
  return result
}

Rx.Observable.prototype.calculate = calculate

const bar = foo.calculate(x => x * 2)

bar.subscribe(
  function (x) { console.log(`next ${x}`)},
  function (err) { console.log(`error ${err}`)},
  function () { console.log('done')}
)
