const foo = Rx.Observable.interval(500)
  .zip(Rx.Observable.of('a', 'b', 'c', 'd', 2), (x, y) => y)

const bar = foo.map(x => x.toUpperCase())

/**
 * --a--b--c--d--2|   (foo)
 * map(toUpperCase)
 * --A--B--C--D--#    (bar)
 * 
 * catch(# => -Z)
 * --A--B--C--D--Z|
 * 
 * catch(# => output)
 * --A--B--C--D--------A--B--C--D--------A--B--C--D--------A--B--C--D--
 */

//  const result = bar.catch(error => Rx.Observable.of('Z'))
//  const result = bar.catch(error => Rx.Observable.empty()))
const result = bar.catch((error, outputObs) => outputObs)
 
 result.subscribe(
   function (x) { console.log(`next ${x}`)},
   function (err) { console.log(`error ${err}`)},
   function () { console.log('done')}
 )

