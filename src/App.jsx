import { useState } from 'react'
import viteLogo from '/vite.svg'
import './styles/components/app.sass';
import './styles/components/header.sass';
import './styles/components/skills.sass';
import './styles/components/footer.sass';
import Profile from "./img/profile.jpeg";
import Project1 from "./img/logoREACT.jpeg";
import Project2 from "./img/logoJS.jpeg";
import Project3 from "./img/logoHTML.jpeg";
import Project4 from "./img/logoCSS.jpeg";

function App() {
  return (
    <>
		<nav  id = "background-itens-on-top" class="nav container void-background">
			<div class="nav-left">
				<a href="https://medium.com/@wagnerpoppigames" class="nav-item">
					<span class="icon">
						<i class="fa fa-medium"></i>
					</span>
				</a>
				<a href="https://github.com/WagnerPoppi" class="nav-item">
					<span class="icon">
						<i class="fa fa-github"></i>
					</span>
				</a>
				<a href="https://x.com/PoppiWagner" class="nav-item">
					<span class="icon">
						<i class="fa fa-twitter"></i>
					</span>
				</a>				
			</div>

			<div id= "text-right" class="nav-right nav-menu">
				<a class="nav-item" href="#about">Sobre</a>
				<a class="nav-item" href="#projects">Habilidades</a>
				<a class= "nav-item" href="#footer-text">Sobre mim</a>
			</div>

    
			<span class="nav-toggle">
				<span></span>
				<span></span>
				<span></span>
			</span>
		</nav>
				
		<section id="about" class="section section-1">
			<div class="container has-text-centered">
				<img class="avatar" src={Profile}/>
			</div>
			<div class="container">
				<p class="intro">
        Olá, meu nome é Wagner, sou um programador front-end apaixonado por criar interfaces web dinâmicas e responsivas. Com 17 anos, já comecei a estudar HTML, CSS, JavaScript e React. Adoro transformar ideias em realidade através do código, sempre buscando novas formas de melhorar a experiência do usuário. Estou constantemente aprendendo e me adaptando às novas tendências e tecnologias do desenvolvimento web. Confira minhas habilidades para eu contribuir para o seu próximo desafio digital!
</p>
			</div>

		</section>
		<section  id="projects" class="section section-2">
			<div class="container">
				<div class="has-text-centered">
					<h3 class="title is-3">Habilidades</h3>
				</div>
				
				<div class="columns is-multiline is-desktop">
					<div class="column">
						<div class="box project-text">
							<article>
								<div id = "img-project1">
									<figure class="image project-figure">
										<img src={Project1} alt="Image"/>
									</figure>
								</div>
								<div>			
								</div>
							</article>
						</div>
					</div>
					<div class="column">
						<div class="box project-text">
							<article>
								<div id="img-project2">
									<figure class="image project-figure">
										<img src={Project2} alt="Image"/>
									</figure>
								</div>
								<div>			
								</div>
							</article>
						</div>
					</div>
          <div class="column">
						<div class="box project-text">
							<article>
								<div id="img-project3">
									<figure class="image project-figure">
										<img src={Project3} alt="Image"/>
									</figure>
								</div>
								<div>			
								</div>
							</article>
						</div>
					</div>
          <div class="column">
						<div class="box project-text">
							<article>
								<div id="img-project4">
									<figure class="image project-figure">
										<img src={Project4} alt="Image"/>
									</figure>
								</div>
								<div>			
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="setion-4 has-text-centered contcainer">
			<p class="text-footer-develop"> Desenvolvido por </p>
			<a  id= "footer-text" href="https://wagnerpoppiabout.my.canva.site/">Wagner Poppi</a>
			
		</section>
		<script src="controller.js"></script>
    </>
  )
}

export default App
