import React, { FC } from 'react'
import './container.css'

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

type Props = {
  bgcolor?: Color,
  className?: String,
  children: JSX.Element | JSX.Element[]
}

const Container: FC<Props> = ({ bgcolor, className, children }) => {
  const classN = (className) ? className : ''
  return (

    <div
      style={{ backgroundColor: bgcolor }}
    >
      <div
        className={`inner-container ${classN}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Container