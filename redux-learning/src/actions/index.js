export const increment=(nr)=>{
    return{
        type:"INCREMENT",
        payload:nr

    }
}

export const decrement=()=>{
    return{
        type:"Decrement"
    }
}

export const incrementActionCreater=()=>{
    return dispatch=>{
        setTimeout(()=>{
            console.log("hey");
            dispatch(increment(5));
        },2000) 
        
    } 
}
export const decrementActionCreater=()=>{
    return dispatch=>{
        setTimeout(()=>{
            console.log("hey");
        },2000)
        dispatch(decrement());
    } 
}