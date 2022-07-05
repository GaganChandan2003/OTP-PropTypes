import React,{useState} from 'react';
import PropTypes from "prop-types";
import { useRef } from 'react';
import Pinitem from './Pinitem';

const Pin = ({length,onChange}) => {
   const inputRef=useRef([]);
   const [inputBoxlen] = useState(new Array(length).fill(1));
   const [inputBoxValue, setinputBoxValue] = useState(new Array(length).fill(""));
   
   
   const handelChange=(e,index)=>
   {


    inputBoxValue[index]=e.target.value;
    setinputBoxValue(inputBoxValue);


    if(e.target.value.length>0&&index<length-1)
    {
        inputRef.current[index+1].focus();
    }

    onChange(inputBoxValue.join(""));

  };


  const handleBackSpace=(e,index)=>
  {
    if(index>0)
    {
        inputRef.current[index-1].focus();
    }

    inputBoxValue[index]=e.target.value;
    setinputBoxValue(inputBoxValue);
    onChange(inputBoxValue.join(""))
    
  }


  const handlePaste=(e)=>
  {
    e.preventDefault();
    const data= e.clipboardData.getData("text")
                               .split("")
                               .filter((item,index)=>index<length);
    data.forEach((value,index)=>
    {
        inputBoxValue[index]=value;
        inputRef.current[index].value=value;


        if(index<length-1)
        {
            inputRef.current[index+1].focus();
        } 

        
    })
  }

  return (
    <div onPaste={handlePaste} style={{display:'flex',margin:'auto',justifyContent:'center',gap:'20px'}}>
        {
            inputBoxlen.map((item,index)=>
                {
                    return(
                            <Pinitem 
                                key={index} 
                                onBackSpaceHandler={(e)=>handleBackSpace(e,index)} 
                                changeHandler={(e)=>handelChange(e,index)} 
                                ref={(element)=>
                                {
                                    inputRef.current[index]=element;
                                }}/>
                         )
                }
       )}
    </div>
        
  )
  
}

Pin.propTypes={
    length:PropTypes.number.isRequired,
    onChange: PropTypes.func,
}; 



export default Pin;