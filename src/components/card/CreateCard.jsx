import React from 'react'

function CreateCard(postImg) {
  return (
    <div className="p-[6px]">
        <img src={postImg} className="w-[200px]" alt="" />
    </div>
  )
}

export default CreateCard