import {  Hourglass } from 'react-css-spinners'

import React from 'react'

const loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='text-2xl text-csBlack font-inter mb-2'>Loading</h2>
      <Hourglass
    color="#FF9F0D"
    size={100}
  />
    </div>
  )
}

export default loading
