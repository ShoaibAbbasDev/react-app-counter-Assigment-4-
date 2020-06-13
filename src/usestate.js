import React ,{usestate} from 'react';
import'./usestate.css';

function Usestate_funtion(){
    let [count,setcount]=usestate(0);
 
    return(
        <button onClick={()=> setcount(
            count=count+1
        )} >Increment</button>


    );
}

export default Usestate_funtion;