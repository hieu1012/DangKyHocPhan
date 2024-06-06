// skypack redux
import {createStore } from 'https://cdn.skypack.dev/redux';

//Reudcer
function reducer(state = 0, action) {
    switch(action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }
}

//Store
const store= window.store = createStore(reducer); 
//window để gọi store từ bên ngoài console


//Action
function actionDEPOSIT(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWITHDRAW(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}

//DOM Event
const inc = document.querySelector('#deposit');
const dec = document.querySelector('#withdraw');

//Event handler
inc.onclick = function() {
    store.dispatch(actionDEPOSIT(10));
    // console.log("Tăng lên 10");
}

dec.onclick = function() {
    store.dispatch(actionWITHDRAW(10));
    // console.log("Giảm đi 10");
}

//Subscribe
store.subscribe(() => {
    console.log(store.getState());
    render();
})


//GD
function render() {
    const output = document.querySelector('#output');
    output.innerText = store.getState();
}

render();
