const busObservable = Rx.Observable.of(
    {code: 'en-us', value: '-TEST-'},
    {code: 'en-us', value: 'hello'},
    {code: 'es', value: '-TEST-'},
    {code: 'en-us', value: 'amazing'},
    {code: 'pt-br', value: '-TEST-'},
    {code: 'pt-br', value: 'olá'},
    {code: 'es', value: 'hola'},
    {code: 'es', value: 'mundo'},
    {code: 'en-us', value: 'world'},
    {code: 'pt-br', value: 'mundo'},
    {code: 'es', value: 'asombroso'},
    {code: 'pt-br', value: 'maravilhoso'}
  ).concatMap(x => Rx.Observable.of(x).delay(500));


const all = busObservable
  .groupBy(obj => obj.code)
  .mergeMap(innerObs => innerObs.skip(1).map(obk => obj.value))

  // not most efficient way:
// const enUS = busObservable
//   .filter(obj => obj.code === 'en-us')
//   .skip(1)
//   .map(obj => obj.value)

//   const es = busObservable
//   .filter(obj => obj.code === 'es')
//   .skip(1)
//   .map(obj => obj.value)

//   const ptBR = busObservable
//   .filter(obj => obj.code === 'pt-br')
//   .skip(1)
//   .map(obj => obj.value)

// const all = Rx.Observable.merge(enUS, es, ptBR)

all.subscribe(x => console.log(x))

