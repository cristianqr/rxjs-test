var button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .subscribe(() => {
        console.log('clicked');
    })