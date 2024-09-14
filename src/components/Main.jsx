import React from 'react'

export default function Main({children}) {
  return (
        <main>
            <div className="container">
                {children}
            </div>
        </main>
  )
}
