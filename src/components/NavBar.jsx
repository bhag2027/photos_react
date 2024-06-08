import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GALLERY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Add photos</Link>
        <Link className="nav-link" to="/search">Search photos</Link>
        <Link className="nav-link" to="/delete">Delete photos</Link>
        <Link className="nav-link" to="/view">View photos</Link>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar