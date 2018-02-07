class ObservableTest {
    constructor () {
        this.values = [];
    }

    next (value) {
        this.values.push(value);
    }

    subscribe (func) {
        this.values.map(value => {
            func(value);
        });
    }
}

var observer = new ObservableTest();

observer.next(1);
observer.next(2);
observer.next(3);

observer.subscribe((value) => {
   console.log(value);
});