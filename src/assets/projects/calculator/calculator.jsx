
import { useState } from 'react';
import './calculator.css'
 
export default function Calculator(){
  const [input, setInput] = useState('');

  const Appendtodisplay = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

   function handleEqual() {
    try {
      // Evaluate the expression using Function constructor
      const result = Function('"use strict";return (' + input + ')')();
      setInput(result.toString());
    } 
    catch (error) {
      setInput('Syntax error');
    }
   }
 
 

 return(
  
   <div className="container">
    <input id='display' type='text' value={input} readOnly></input>
    <div id='keys'>
  <button className='operatorbtn' onClick={()=>Appendtodisplay('+')} >+</button>
  <button onClick={()=>Appendtodisplay('7')}>7</button>
  <button onClick={()=>Appendtodisplay('8')}>8</button>
  <button onClick={()=>Appendtodisplay('9')}>9</button>
  <button className='operatorbtn' onClick={()=>Appendtodisplay('-')}>-</button>
  <button onClick={()=>Appendtodisplay('4')}>4</button>
  <button onClick={()=>Appendtodisplay('5')}>5</button>
  <button onClick={()=>Appendtodisplay('6')}>6</button>
  <button className='operatorbtn' onClick={()=>Appendtodisplay('*')}>*</button>
  <button onClick={()=>Appendtodisplay('1')}>1</button>
  <button onClick={()=>Appendtodisplay('2')}>2</button>
  <button onClick={()=>Appendtodisplay('3')}>3</button>
  <button className='operatorbtn' onClick={()=>Appendtodisplay('/')}>/</button>
  <button onClick={()=>Appendtodisplay('0')}>0</button>
  <button onClick={()=>Appendtodisplay('.')}>.</button>
  <button className='operatorbtn' onClick={handleEqual}>=</button>
  <button className='operatorbtn'onClick={handleClear} >AC</button>
  
  </div>
   </div>
   
  )
 
 
}

