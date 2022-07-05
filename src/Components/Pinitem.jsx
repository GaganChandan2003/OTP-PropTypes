import React from 'react'
import { forwardRef } from 'react'

const Pinitem = forwardRef(({changeHandler,onBackSpaceHandler},ref) => {
    const handleKeyUp=(e)=>
    {
         if(e.keyCode===8)
         {
            onBackSpaceHandler(e);
         }
         else{
            changeHandler(e);
         }
    }
  return (
    <div>
        <input 
            ref={ref} 
            maxLength={1}
            onChange={changeHandler}
            onKeyUp={handleKeyUp}
        />
    </div>
  )
});

export default Pinitem