import React from 'react'

function HandleDelete({handledelete}) {
  console.log(handledelete)
  return (
    <div>
        <button onClick={handledelete}>Delete</button>
    </div>
  )
}

export default HandleDelete  