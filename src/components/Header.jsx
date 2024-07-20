import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <>
    <header>
      <nav>
        <div class="left">Bishwajeet's Portfolio</div>
        <div class="right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}
