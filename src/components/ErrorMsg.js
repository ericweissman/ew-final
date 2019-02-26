import React from 'react'

const ErrorMsg = (props) => {
  return(
    <div>
      <p>There has been an error: {props.error}</p>
    </div>
  )
}

export default ErrorMsg;