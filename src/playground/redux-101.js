import {createStore} from 'redux'


const store = createStore((state = {count : 5} , action) =>{
    switch(action.type)
    {
       
        case 'RESET' :
        const resetValue = typeof action.ResetTo === 'number' ? action.ResetTo : 0 ;
        return{
            count : 0 + resetValue
        };
        case 'INCREMENT' :
        return {
            count : state.count + 1
        };
        case 'DECREMENT' :
        return {
            count : state.count - 1
        };
        default :
        return state;
    }

});

const unsub = store.subscribe(() => {
    console.log(store.getState());
});



store.dispatch({
    type : 'RESET' ,
    ResetTo : 100
});


store.dispatch({
    type : 'INCREMENT'
});



store.dispatch({
    type : 'DECREMENT'
});


store.dispatch({
    type : 'RESET'
});


