import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState("black")

  const click =(color)=>{
    setColor(color)

  }

  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  return (
    < >
      
      <div className='container'>
        <h1>Background Color Change</h1>

    <div className='button'>
    <button onClick={()=>click("green")} className='btn btn-success p-2 mt-2' >Green</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button onClick={()=>click("red")} className='btn btn-danger p-2 mt-2' >Red</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
         <button onClick={()=>click("blue")} className='btn btn-info p-2 mt-2'>Blue</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

         <button onClick={()=>click("black")} className='btn btn-dark p-2 mt-2'>Black</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

         <button onClick={()=>click("white")} className='btn btn-light p-2 mt-2'>White</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        
         <button onClick={()=>click("pink")} className='btn btn-secondary p-2 mt-2'>Pink</button>
    </div>
  
      </div>  
    </>
  );
}

export default App;
