import React from 'react'

function TextArea({name,className,placeholder,handelInput,required=true ,value}) {
    return (
      <textarea  
         className={`focus:outline-none px-3 py-3 ${className}`} 
         name={name}
         onChange={handelInput} 
         placeholder={placeholder} 
         required
         rows={4}
         defaultValue={value}
         ></textarea>
    )
}

export default TextArea
