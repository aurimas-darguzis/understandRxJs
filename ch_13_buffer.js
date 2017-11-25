const foo = Rx.Observable.of('h', 'e', 'l', 'l', 'o')
    .zip(Rx.Observable.interval(600).take(5), (x,y) => x)

/**
 * -----h-----e-----l-----l-----o    (foo)
 *  bufferCount(2)
 * -----------he-----------ll------o|
 * 
 *    buffer
 *    bufferCount
 *    bufferTime
 *    bufferToggle
 *    bufferWhen
 * 
 * -----h-----(he)--(hel)-(hell)(hello|)
 * 
 * 
 */

 const result = foo.bufferCount(2)

 result.subscribe(
   function (x) { console.log(`next ${x}`)},
   function (err) { console.log(`error ${err}`)},
   function () { console.log('done')}
 )