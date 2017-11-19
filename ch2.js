const foo = Rx.Observable.interval(1000)

/*

foo: ----0---1---2---3--...
          multiplyBy(2)
bar: ----0---2---4---6--...

*/