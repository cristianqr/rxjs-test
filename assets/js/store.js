class Store {
    constructor (_reducer) {
        this.state = 0;
        this.listeners = [];
        this.reducer = _reducer;
    }

    dispatch (action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => {
            listener();
        })
    }

    subscribe (listener) {
        this.listeners.push(listener);
    }

    getState () {
        return this.state;
    }
}

function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return state +  1;
    }else if (action.type === 'DECREMENT') {
        return state -1;
    }

    return state;
}

const store = new Store(reducer);

const actionIncrement = {type: 'INCREMENT'};
const actionDecrement = {type: 'DECREMENT'};

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionIncrement);


store.dispatch(actionDecrement);