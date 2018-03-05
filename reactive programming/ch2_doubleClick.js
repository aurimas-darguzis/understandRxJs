const button = document.querySelector('.button');
const label = document.querySelector('h4');

const clickStream = Rx.Observable.fromEvent(button, 'click');

const doubleClickStream = clickStream
    .bufferWhen(() => clickStream.debounceTime(250))
    .map(arr => arr.length)
    .filter(len => len === 2);

doubleClickStream.subscribe(event => {
    label.textContent = 'double click';
});

doubleClickStream
    .delay(1000)
    .subscribe(suggestion => {
        label.textContent = '-';
    });
