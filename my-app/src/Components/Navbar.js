import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode} navbar-expand-lg bg-body-tertiary`} data-bs-theme={props.mode} style={{backgroundColor: props.navColor}}   >
    <div className="container-fluid">
      <a className="navbar-brand"href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"href="/">{props.aboutText}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"href="/">Link</a>
          </li>
          
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search"  aria-label="Search"/>
          <button className={`btn btn-${props.btnColor} `}type="submit">Search</button>
        </form>

<div className="dropdown">
  <button className="btn btn-primary dropdown-toggle mx-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Select Mode
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li className="dropdown-item" onClick={props.SelectDark}>Dark</li>
    <li className="dropdown-item" onClick={props.SelectLight}>Light</li>
    <li className="dropdown-item"onClick={props.SelectPassive}>Passive</li>
    <li className="dropdown-item"onClick={props.SelectActive}>Active</li>
  </ul>
</div>
      </div>
    </div>
 
  </nav>
  )
  
}
Navbar.propTypes = {
title: PropTypes.string.isRequired,
aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: 'Set Title here',
  aboutText: 'Add about here'
};
