const source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

const result = source.map(x => parseInt(x))
                     .filter(x => !isNan(x))
                     .reduce((x, y) => x + y);

console.log(result); // 33