import React ,{usestate} from 'react';
import'./usestate.css';

function Usestate_funtion(){
    let [count,setcount]=usestate(1);
 
    return(
        <div>
        <h3>The value of counter is = {count}</h3>
        <button onClick={()=> setcount(count=count+1)} >Increment</button>
        </div>
        );
}

export default Usestate_funtion;