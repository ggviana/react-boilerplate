import React from 'react'

export default function (...elements) {
  return elements.reduceRight((PrevComponent, NextComponent) => ({ children }) => (
      <NextComponent>
        <PrevComponent>
          {children}
        </PrevComponent>
      </NextComponent>
    ),
    ({ children }) => children
  )
}
