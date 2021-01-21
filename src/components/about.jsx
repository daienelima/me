import React, { Component } from 'react'
import javaIcon from '../images/javascript.png';
import dockerIcon from '../images/docker.png';
import javaBackIcon from '../images/java.png';
import web from '../images/web.png';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Quem sou eu?</h2>
                    <p>Eu sou estudante de tecnologia, com experiência em backend usando Java/Spring Boot.
                    Eu adoro explorar novas tecnologias e muitas vezes fico surpresa com o progresso que nós, como espécie humana, temos feito até agora nos últimos anos.
                    </p>
                    <p>Comecei a refletir minhas idéias e pensamentos por meio de palavras recentemente, então erros de ortografia e gramática são muito frequentes. Você pode me escrever de volta se detectar algum e não quiser mais viver :P </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">AQUI ESTÃO ALGUMAS DE MINHAS ESPECIALIDADES</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1" style={{ height: '260px'}}>
                <span className="icon">
                <img src={web} style={{ paddingTop: '10px'}}/>
                </span>
                <div className="desc">
                    <h3>Desenvolvimento Web </h3>
                    <p>Desenvolvimento de aplicações angular 7+ e react</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <img src={javaBackIcon} style={{ paddingTop: '10px'}}/>
                </span>
                <div className="desc">
                    <h3>Backend</h3>
                    <p>Desenvolvimento ágil de aplicações monolíticas e microsserviços com Java usando o framework Spring Boot</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5" style={{ height: '260px'}}>
                <span className="icon">
                    <img src={dockerIcon} style={{ paddingTop: '10px'}}/>
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Utilização de ferramentas como Gitlab, Jenkins, Puppet, Docker, Kubernets, Openshift, Artifactory, SonarQube, Jira e Grafana.</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <img src={javaIcon} style={{ paddingTop: '10px'}}/>
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Desenvolvimento utilizando nodeJs e next </p>
                </div>
                </div>
            </div>
               
            </div>
        </div>
        </section>
      </div>
    )
  }
}
