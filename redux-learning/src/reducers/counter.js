let initialSate=0;
const counterReducer=(state=initialSate,action)=>{
      switch(action.type){
        case "INCREMENT":
          return state +action.payload;
        case "Decrement":
          return state -1;
        default:
            return state;
      }
    }
export default counterReducer;