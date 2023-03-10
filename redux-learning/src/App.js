import {useSelector,useDispatch} from "react-redux";
import {incrementActionCreater,decrementActionCreater} from "./actions/index" 

function App() {
  const counterReducer = useSelector(state=> state.counterReducer);
  const loggedReducer = useSelector(state=>state.loggedReducer);
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>Counter {counterReducer}</h1>
    {loggedReducer ? <h3>The information you don't see when you are not loged in </h3> :""}
    <button onClick={()=> dispatch(incrementActionCreater())}>+</button> 
     <button onClick={()=> dispatch(decrementActionCreater())}>-</button>
    </div>
  );
}

export default App;
