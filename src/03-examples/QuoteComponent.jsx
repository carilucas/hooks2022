
import React, { useLayoutEffect, useRef, useState } from 'react'

export const QuoteComponent = ({author, quote}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width:0, height:0});

  useLayoutEffect(() => {
    const width = pRef.current.getBoundingClientRect().width;
    const height = pRef.current.getBoundingClientRect().height;
    setBoxSize({
      ...boxSize,
      width,
      height
    })
  
    
  }, [quote])
  return (
    <>
      <blockquote 
        className="blockquote" 
        style={ { display:'flex'} }
      >
        <p ref={ pRef } >{ quote }</p>
        <footer className="blockquote-footer text-end">{ author }</footer>
      </blockquote>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
