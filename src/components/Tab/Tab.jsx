import React, { useState } from 'react'

function Tab() {
  const nameTab =['Home','Services','News','Blog','Contact'];
 
  return (
    <>
    <div className='container-tab'>
      {nameTab?.map(name=>(
          <div className='text-name'><a href={name.toLowerCase()}>{name}</a></div>
      )
      )}
    </div>

    </>
  )
}

export default Tab