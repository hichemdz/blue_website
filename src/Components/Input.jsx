import React from 'react'

function Input({ name, className, placeholder, type = 'text', handelInput, required = true, value }) {
  return (
    <input
      type={type}
      className={`focus:outline-none px-3 py-3 ${className}`}
      name={name}
      onChange={handelInput}
      placeholder={placeholder}
      required
      defaultValue={value}
    />
  )
}

export default Input
