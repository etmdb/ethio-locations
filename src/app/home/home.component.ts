import { Component } from '@angular/core';


@Component({
	template: 
	` <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
	<div class="container">
	  <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
	  <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		Menu
		<i class="fa fa-bars"></i>
	  </button>
	  <div class="navbar-collapse collapse" id="navbarResponsive" style="">
		<ul class="navbar-nav ml-auto">
		  <li class="nav-item mx-0 mx-lg-1">
			<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="Home">Home</a>
		  </li>
		  <li class="nav-item mx-0 mx-lg-1">
			<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
		  </li>
		  <li class="nav-item mx-0 mx-lg-1">
			<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
		  </li>
		</ul>
	  </div>
	</div>
  </nav>
  
 <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
        
          <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5" href="addis-map">Play</a>
        </div>
      </div>
	</header>
	
	`,

	
	styleUrls: ['/home.component.css']
})
export class HomeComponent {
	

}