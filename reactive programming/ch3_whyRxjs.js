// Reactive Programming allows you to specify dynamic behavior of a value completely at the time of creation/declaration

const streamA = Rx.Observable.of(3, 4);
const streamB = streamA.map(a => 10 * a);
