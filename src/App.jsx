import { useState } from 'react'
import viteLogo from '/vite.svg'
import './styles/components/app.sass';
import './styles/components/header.sass';
import './styles/components/skills.sass';
import './styles/components/footer.sass';


function App() {
  return (
    <>
		<nav  id = "background-itens-on-top" className="nav container void-background">
			<div className="nav-left">
				<a href="https://medium.com/@wagnerpoppigames" className="nav-item">
					<span className="icon">
						<i className="fa fa-medium"></i>
					</span>
				</a>
				<a href="https://github.com/PoppiJr" className="nav-item">
					<span className="icon">
						<i className="fa fa-github"></i>
					</span>
				</a>
				<a href="https://x.com/PoppiWagner" className="nav-item">
					<span className="icon">
						<i className="fa fa-twitter"></i>
					</span>
				</a>				
			</div>

			<div id= "text-right" className="nav-right nav-menu">
				<a className="nav-item" href="#about">Sobre</a>
				<a className="nav-item" href="#projects">Habilidades</a>
				<a className= "nav-item" href="#footer-text">Sobre mim</a>
			</div>

    
			<span className="nav-toggle">
				<span></span>
				<span></span>
				<span></span>
			</span>
		</nav>
				
		<section id="about" className="section section-1">
			<div className="container has-text-centered">
				<img className="avatar" src="src/img/profile.png"/>
			</div>
			<div className="container">
				<p className="intro">
        Olá, meu nome é Wagner, sou um programador front-end apaixonado por criar interfaces web dinâmicas e responsivas. Com 17 anos, já comecei a estudar HTML, CSS, JavaScript e React. Adoro transformar ideias em realidade através do código, sempre buscando novas formas de melhorar a experiência do usuário. Estou constantemente aprendendo e me adaptando às novas tendências e tecnologias do desenvolvimento web. Confira minhas habilidades para eu contribuir para o seu próximo desafio digital!
</p>
			</div>

		</section>
		<section  id="projects" className="section section-2">
			<div className="container">
				<div className="has-text-centered">
					<h3 className="title is-3">Habilidades</h3>
				</div>
				
				<div className="columns is-multiline is-desktop">
					<div className="column">
						<div className="box project-text">
							<article>
								<div id = "img-project1">
									<figure className="image project-figure">
										<img src="src/img/logoREACT.png" alt="Image"/>
									</figure>
								</div>
								<div>			
								</div>
							</article>
						</div>
					</div>
					<div className="column">
						<div className="box project-text">
							<article>
								<div id="img-project2">
									<figure className="image project-figure">
										<img src="src/img/logoJS.png" alt="Image"/>
									</figure>
								</div>
								<div>			
								</div>
							</article>
						</div>
					</div>
          <div className="column">
						<div className="box project-text">
							<article>
								<div id="img-project3">
									<figure className="image project-figure">
										<img src="src/img/logoHTML.png" alt="Image"/>
									</figure>
								</div>
								<div>			
								</div>
							</article>
						</div>
					</div>
          <div className="column">
						<div className="box project-text">
							<article>
								<div id="img-project4">
									<figure className="image project-figure">
										<img src="src/img/logoCSS.png" alt="Image"/>
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

		<section className="setion-4 has-text-centered contcainer">
			<p className="text-footer-develop"> Desenvolvido por </p>
			<a  id= "footer-text" href="https://wagnerpoppiabout.my.canva.site/">Wagner Poppi</a>
			
		</section>
		<script src="controller.js"></script>
    </>
  )
}

export default App
