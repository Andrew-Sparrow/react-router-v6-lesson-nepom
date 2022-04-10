import {Link, useMatch} from 'react-router-dom'

import React from 'react'

function CustomLink({children, to, ...props}) {
  const match = useMatch(to)
  console.log(match)

  return (
    <Link
      to={to}
      {...props}
      style={{
        color: match && 'var(--color-active)'
      }}
    >
      {children}
    </Link>
  )
}

export default CustomLink