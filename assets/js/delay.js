var button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click')
    .delay(1000)
    .subscribe(() => {
        console.log('clicked');
    })