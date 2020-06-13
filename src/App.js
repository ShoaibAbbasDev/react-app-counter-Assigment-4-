import React, {useState} from 'react';
import './App.css';
import Usestate_funtion from './counter'

function App() {
  let [count,setcount]=useState(1);
  let [morning,setmorning]=useState(false)
  return (
    <div className={'night ${morning ? "dalight" : "" } '}> 
      <div className='box'>
      <h2>Increment & Decrement Operation</h2>
      <form>
        <input type="number" value={count}></input>
        <input type="text" value={morning ? 'Morning':'Night'}></input>
      </form>
      <button onClick={()=> setcount(count=count+1)
      } >Increment</button>
      <button onClick={()=>setmorning(!morning)}>Check Morning</button>
      </div>

    </div>
  );
}

export default App;
