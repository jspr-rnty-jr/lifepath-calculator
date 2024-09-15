import React from 'react'

export default function Main({children}) {
  return (
        <main>
            <div className="container">
                <div className='content'>
                  {children}
                </div>
            </div>
        </main>
  )
}
