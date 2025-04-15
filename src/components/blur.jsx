import React from 'react'

function blur() {
  return (
<div className="w-16 absolute left-1/3 top-0 h-full z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-gray-900/90 to-transparent backdrop-blur-3xl bg-transpare" />
      </div>
  )
}

export default blur