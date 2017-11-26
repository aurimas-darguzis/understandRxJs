const foo = Rx.Observable.interval(500).take(5)
  .zip(Rx.Observable.of('a', 'b', 'a', 'c', 'b'), (x,y)=>y);

const flusher = Rx.Observable.interval(1100).take(1)
  .concat(Rx.Observable.never())

  /**
   * --a--b--A--c--b|
   * ------0-------...  (flusher)
   *  distinct
   * --a--b--A--c---|
   * 
   * distinctUntilChanged
   * --a--b--a--aaaaa--b|
   * --a--b--a----b|
   */

   // you can use foo.distinctUntilChanged() as well
   const result = foo.distinct(
     (x,y) => x.toLowerCase(),
     // when should the registry be cleared
    flusher  
  )

  result.subscribe(
    function (x) { console.log(`next ${x}`)},
    function (err) { console.log(`error ${err}`)},
    function () { console.log('done')}
  )