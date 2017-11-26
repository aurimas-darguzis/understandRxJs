const foo = Rx.Observable.interval(100).take(5)

/**
 * --0--1--2--3--4|
 *  debounceTime(1000) // waits for 1000 silence
 * ---------------4|
 * debounce(50)
 * ----0--1--2--3--4|
 */

 const result = foo.debounceTime(1000)

 result.subscribe(
   function (x) { console.log(`next ${x}`)},
   function (err) { console.log(`error ${err}`)},
   function () { console.log('done')}
 )
 