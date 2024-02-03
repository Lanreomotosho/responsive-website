import React from 'react'

export const MenuIcon = ({size,color,className}) => {
  return (
    <svg className={className} width={size?size:'1rem'} height={size?size:'1rem'} viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="20" height="3" rx="1.5" fill={color?color:"#D9D9D9"}/>
    <rect x="8" y="16" width="20" height="3" rx="1.5" fill={color?color:"#D9D9D9"}/>
    </svg>
  )
}
