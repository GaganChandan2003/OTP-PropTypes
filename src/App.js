import './App.css';
import React,{useState} from 'react';
import Pin from './Components/Pin';

function App() {
  const [otp, setotp] = useState('');
  
  return (
    <div className="App">
      <Pin 
      length={4} 
      onChange={(value)=>{setotp(value)}}
      />
      <h3>Your OTP!{otp}</h3>
    </div>
  );
}

export default App;
