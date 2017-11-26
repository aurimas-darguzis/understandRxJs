const sourceObservable = Rx.Observable.interval(500).take(5)
const resultObservable = sourceObservable
  // .mergeMap(x => Rx.Observable.of(10 * x))
  .mergeMap(x => {
    if (x % 2 === 0) {
      return Rx.Observable.of(x)
    } else {
      return Rx.Observable.of(x+1,x+2)
    }
  })

/**
 * ---0---1---2---3---4|
 * ---+---+---+---+---+|
 *    \   \   \   \   \
 *    0|  10|  20|  30|  40|
 * ---0---10---20---30---40|
 * 
 * ---+---+---+---+---+|
 *    \   \   \   \   \
 *    0|  23| 2|  45| 4|
 * ---0---23--2---45--4|
 */

 resultObservable.subscribe(x => console.log(x)
)