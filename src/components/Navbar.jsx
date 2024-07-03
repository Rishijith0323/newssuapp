import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
   
    <img src="https://media.istockphoto.com/id/1330788505/vector/news-paper-care-logo-template-design.jpg?s=612x612&w=0&k=20&c=c9loKIAmPQ06pPh07dJny2iNKEv4BMhMXPZx9AGf8VE=" alt="Logo" width="200" height="194" class="d-inline-block align-text-top"></img>
    <a class="navbar-brand" href="#">NEWSPAPER SUBCRIBERS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Add</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delete">Delete</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewsub">View Subcribers</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
