import React from 'react'
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#TV Seires'>TV Series</a></li>
        <li><a href='#Trailer'>Trailer</a></li>
         <div class="header-right">
        <li><a className='Login' href='#login'>Login</a></li>
        <li><a href='#Sign Up'>Sign Up</a></li>
        </div>
      </ul>
    </nav>
  )
}
