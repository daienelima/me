import React, { Component } from 'react';
import javaIcon from '../images/javascript.png';
import dockerIcon from '../images/docker.png';
import javaBackIcon from '../images/java.png';
import web from '../images/web.png';
import cloudIcon from '../images/cloud.png';
import certIcon from '../images/certIcon.png';


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
                                            <span className="heading-meta">Sobre</span>
                                            <h2 className="colorlib-heading">Quem sou eu?</h2>
                                            <p>
                                                Sou uma desenvolvedora apaixonada por tecnologia, com foco em desenvolvimento backend utilizando Java e Spring Boot. Gosto de explorar novas ferramentas e frameworks, e me inspiro no progresso impressionante que temos alcançado como sociedade por meio da inovação.
                                            </p>
                                            <p>
                                                Recentemente, comecei a compartilhar ideias e pensamentos através da escrita — então, não se assuste se encontrar algum erro de gramática ou ortografia por aqui. Pode me avisar (eu juro que não vou desaparecer por isso 😄).
                                            </p>
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
                                <span className="heading-meta">O que eu faço?</span>
                                <h2 className="colorlib-heading">AQUI ESTÃO ALGUMAS DE MINHAS ESPECIALIDADES</h2>
                            </div>
                        </div>

                        <div className="row row-pt-md">
                            {/* Certificações */}
                            <div className="col-md-4 text-center animate-box">
                                <div
                                    className="services color-6"
                                    style={{
                                        minHeight: '320px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        
                                    }}
                                >
                                    <span className="icon">
                                        <img
                                            src={certIcon}
                                            alt="Certificações"
                                            style={{
                                                paddingTop: '10px',
                                                width: '60px',
                                                height: '60px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </span>
                                    <div className="desc">
                                        <h3>
                                            <a
                                                href="https://learn.microsoft.com/pt-br/users/daienemelodelima-8137/credentials/1834a3e77134a3b1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                            >
                                                CERTIFICAÇÕES
                                            </a>
                                        </h3>
                                        <p style={{ fontSize: '14px' }}>
                                            Certificada em tecnologias de nuvem, desenvolvimento e arquitetura:
                                            <br />
                                            • <a
                                                href="https://www.credly.com/badges/142dd93c-be31-42f2-a393-d01ba10c2dfc/linked_in_profile"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                AWS Solutions Architect Associate
                                            </a><br />
                                            • <a
                                                href="https://learn.microsoft.com/pt-br/users/daienemelodelima-8137/credentials/1834a3e77134a3b1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Microsoft Certified: Azure Developer Associate
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Desenvolvimento Web */}
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1" style={{ minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <span className="icon">
                                        <img src={web} alt="Desenvolvimento Web" style={{ paddingTop: '10px' }} />
                                    </span>
                                    <div className="desc">
                                        <h3>Desenvolvimento Web</h3>
                                        <p>Criação de aplicações modernas com Angular 7+ e React, com foco em usabilidade, performance e boas práticas de front-end.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2" style={{ minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <span className="icon">
                                        <img src={javaBackIcon} alt="Backend" style={{ paddingTop: '10px' }} />
                                    </span>
                                    <div className="desc">
                                        <h3>Backend</h3>
                                        <p>Desenvolvimento ágil de aplicações monolíticas e microsserviços com Java, utilizando os frameworks Spring Boot e Micronaut. Aplicação de boas práticas de arquitetura, escalabilidade e performance.</p>
                                    </div>
                                </div>
                            </div>

                            {/* DevOps */}
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5" style={{ minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <span className="icon">
                                        <img src={dockerIcon} alt="DevOps" style={{ paddingTop: '10px' }} />
                                    </span>
                                    <div className="desc">
                                        <h3>DevOps</h3>
                                        <p>Experiência com ferramentas de automação, integração e entrega contínua (CI/CD), além de monitoramento. Uso de GitLab, GitHub Actions, Jenkins, Puppet, Docker, Kubernetes, OpenShift, Artifactory, SonarQube, Jira, Grafana e New Relic.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Node.js e Next.js */}
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3" style={{ minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <span className="icon">
                                        <img src={javaIcon} alt="Node.js e Next.js" style={{ paddingTop: '10px' }} />
                                    </span>
                                    <div className="desc">
                                        <h3>Node.js e Next.js</h3>
                                        <p>Desenvolvimento de aplicações modernas utilizando Node.js e Next.js, com foco em aplicações performáticas e escaláveis.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Cloud - AWS & Azure */}
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4" style={{ minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <span className="icon">
                                        <img src={cloudIcon} alt="Cloud (AWS e Azure)" style={{ paddingTop: '10px' }} />
                                    </span>
                                    <div className="desc">
                                        <h3>Cloud (AWS & Azure)</h3>
                                        <p>Experiência na construção e implantação de aplicações em nuvem utilizando os principais serviços da AWS e do Microsoft Azure, com foco em escalabilidade, segurança e automação.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
