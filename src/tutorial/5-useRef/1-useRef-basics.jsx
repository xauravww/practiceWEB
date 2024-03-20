import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const useRefInput = useRef(null)

  useEffect(
    ()=>{
      useRefInput.current.focus()
    }
  )

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(useRefInput.current.value)
    // useRefInput.current.value =""
  }


  return (
   <>
   <form className='form' onSubmit={handleSubmit}>
    <div>
      <input type="text" placeholder='Enter ur value here'  ref={useRefInput}/>
      <button type='submit'>Submit</button>
    </div>
   </form>
   </>
    
  )
};

export default UseRefBasics;
