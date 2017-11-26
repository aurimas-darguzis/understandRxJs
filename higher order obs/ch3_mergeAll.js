const clickObservable = Rx.Observable
  .fromEvent(document, 'click')

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000))
  .mergeAll()
  // .mergeAll(2) only merge 2 observables, others will be ignored

/**
 * ------+------+------------
 * ------+---------+---------------
 *        \-0-1-2-3 \-0-1-2-3-4-5-6
 *       mergeAll
 * --------0-1-2-3--405162738495... 
 */

clockObservable
  .subscribe(x => console.log(x))