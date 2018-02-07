var button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map(event => event.clientY)
    .scan((count, clientX) => count + clientX, 0)
    .subscribe(count => {
        console.log(count);
    })