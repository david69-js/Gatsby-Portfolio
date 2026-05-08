import React from 'react'
export const ArrowDown = ({fill, height, className, id}) => {
  return (
    <svg  viewBox="0 0 24 24" height={height} className={className}>
        <g>
            <path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z" fill={fill}/>
            <polygon points="12 18.414 7.293 13.707 8.707 12.293 12 15.586 15.293 12.293 16.707 13.707 12 18.414" fill={fill}/>
            <rect x="11" y="6" width="2" height="11" fill={fill}/>
        </g>
    </svg>
  )
}
